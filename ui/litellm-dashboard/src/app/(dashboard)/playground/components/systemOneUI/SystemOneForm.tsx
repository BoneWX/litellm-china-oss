"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useId, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { AddButton, FormFrame, QuestionCardHeader, RemoveButton } from "./DecisionFormControls";
import {
  blankQuestion,
  freeName,
  readForm,
  removeAt,
  renameKey,
  replaceAt,
  retype,
  withNoulCriterion,
  withoutKey,
  type ChoiceQuestion,
  type FormPayload,
  type FormQuestion,
  type NoulQuestion,
  type QuestionType,
  type ScoreQuestion,
} from "./lib/formPayload";
import type { SystemOnePayloadValidation } from "./lib/validatePayload";

const QUESTION_TYPES: readonly QuestionType[] = ["choice", "noul", "score"];
const TYPE_LABEL_KEYS = {
  choice: "playgroundDeep.decisions.typeChoice",
  noul: "playgroundDeep.decisions.typeYesNo",
  score: "playgroundDeep.decisions.typeScore",
} as const;

const isQuestionType = (value: unknown): value is QuestionType => QUESTION_TYPES.some((type) => type === value);

interface SystemOneFormProps {
  value: string;
  onChange: (value: string) => void;
  validation: SystemOnePayloadValidation;
  onReset: () => void;
}

interface QuestionEditorProps<Q extends FormQuestion> {
  question: Q;
  onChange: (question: FormQuestion) => void;
}

interface KeyInputProps {
  value: string;
  taken: readonly string[];
  onCommit: (value: string) => void;
  label: string;
  placeholder?: string;
}

function KeyInput({ value, taken, onCommit, label, placeholder }: KeyInputProps) {
  const { t } = useTranslation();
  const errorId = useId();
  const [draft, setDraft] = useState(value);
  const next = draft.trim();
  let error: string | undefined;
  if (next !== value) {
    if (next === "") {
      error = t("playgroundDeep.decisions.enterName");
    } else if (taken.includes(next)) {
      error = t("playgroundDeep.decisions.nameAlreadyUsed", { name: next });
    }
  }

  function commit() {
    if (error === undefined && next !== value) {
      onCommit(next);
      return;
    }
    setDraft(value);
  }

  return (
    <div className="grid min-w-0 flex-1 gap-1">
      <Input
        aria-label={label}
        aria-invalid={error !== undefined}
        aria-describedby={error === undefined ? undefined : errorId}
        value={draft}
        placeholder={placeholder}
        onChange={(event) => setDraft(event.target.value)}
        onBlur={commit}
      />
      {error !== undefined && (
        <p id={errorId} className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

function ChoiceOptions({ question, onChange }: QuestionEditorProps<ChoiceQuestion>) {
  const { t } = useTranslation();
  const labels = Object.keys(question.criteria);
  const writeCriteria = (criteria: Record<string, string>) => onChange({ ...question, criteria });

  return (
    <div className="grid gap-2">
      <span className="text-sm font-medium">{t("playgroundDeep.decisions.options")}</span>
      {Object.entries(question.criteria).map(([label, description], index) => (
        <div key={index} className="flex items-start gap-2">
          <KeyInput
            key={label}
            label={t("playgroundDeep.decisions.optionLabel")}
            value={label}
            taken={labels}
            onCommit={(next) => writeCriteria(renameKey(question.criteria, label, next))}
          />
          <Input
            aria-label={t("playgroundDeep.decisions.optionDescription", { label })}
            className="flex-2"
            value={description}
            placeholder={t("playgroundDeep.decisions.optionalDescription")}
            onChange={(event) => writeCriteria({ ...question.criteria, [label]: event.target.value })}
          />
          <RemoveButton
            label={t("playgroundDeep.decisions.removeOption", { label })}
            onClick={() => writeCriteria(withoutKey(question.criteria, label))}
          />
        </div>
      ))}
      <AddButton onClick={() => writeCriteria({ ...question.criteria, [freeName(labels, "option")]: "" })}>
        {t("playgroundDeep.decisions.addOption")}
      </AddButton>
    </div>
  );
}

function NoulCriteria({ question, onChange }: QuestionEditorProps<NoulQuestion>) {
  const { t } = useTranslation();
  const yesId = useId();
  const noId = useId();

  return (
    <div className="grid gap-2 sm:grid-cols-2">
      <div className="grid gap-1.5">
        <Label htmlFor={yesId}>{t("playgroundDeep.decisions.yesMeans")}</Label>
        <Input
          id={yesId}
          value={question.criteria?.true ?? ""}
          placeholder={t("playgroundDeep.decisions.optional")}
          onChange={(event) => onChange(withNoulCriterion(question, "true", event.target.value))}
        />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor={noId}>{t("playgroundDeep.decisions.noMeans")}</Label>
        <Input
          id={noId}
          value={question.criteria?.false ?? ""}
          placeholder={t("playgroundDeep.decisions.optional")}
          onChange={(event) => onChange(withNoulCriterion(question, "false", event.target.value))}
        />
      </div>
    </div>
  );
}

function ScoreLevels({ question, onChange }: QuestionEditorProps<ScoreQuestion>) {
  const { t } = useTranslation();
  const writeCriteria = (criteria: string[]) => onChange({ ...question, criteria });

  return (
    <div className="grid gap-2">
      <span className="text-sm font-medium">{t("playgroundDeep.decisions.levels")}</span>
      {question.criteria.map((level, index) => (
        <div key={index} className="flex items-center gap-2">
          <span className="w-6 shrink-0 text-right text-xs text-muted-foreground tabular-nums">{index}</span>
          <Input
            aria-label={t("playgroundDeep.decisions.levelNumber", { number: index })}
            value={level}
            placeholder={t("playgroundDeep.decisions.levelDescription")}
            onChange={(event) => writeCriteria(replaceAt(question.criteria, index, event.target.value))}
          />
          <RemoveButton
            label={t("playgroundDeep.decisions.removeLevel", { number: index })}
            onClick={() => writeCriteria(removeAt(question.criteria, index))}
          />
        </div>
      ))}
      <AddButton onClick={() => writeCriteria([...question.criteria, ""])}>
        {t("playgroundDeep.decisions.addLevel")}
      </AddButton>
    </div>
  );
}

function CriteriaEditor({ question, onChange }: QuestionEditorProps<FormQuestion>) {
  switch (question.type) {
    case "choice":
      return <ChoiceOptions question={question} onChange={onChange} />;
    case "noul":
      return <NoulCriteria question={question} onChange={onChange} />;
    case "score":
      return <ScoreLevels question={question} onChange={onChange} />;
  }
}

interface QuestionCardProps extends QuestionEditorProps<FormQuestion> {
  name: string;
  index: number;
  taken: readonly string[];
  onRename: (name: string) => void;
  onRemove: () => void;
}

function QuestionCard({ name, index, question, taken, onChange, onRename, onRemove }: QuestionCardProps) {
  const { t } = useTranslation();
  const instructionsId = useId();
  const title = name === "" ? String(index + 1) : name;

  return (
    <fieldset
      aria-label={
        name === ""
          ? t("playgroundDeep.decisions.questionNumber", { number: title })
          : t("playgroundDeep.decisions.questionNamed", { name })
      }
      className="grid gap-3 rounded-lg border bg-muted/30 p-3"
    >
      <QuestionCardHeader
        index={index}
        onRemove={onRemove}
        removeLabel={t("playgroundDeep.decisions.removeNamedQuestion", { name: title })}
      />
      <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_10rem]">
        <div className="grid gap-1.5">
          <span className="text-sm font-medium">{t("playgroundDeep.decisions.name")}</span>
          <KeyInput
            key={name}
            label={t("playgroundDeep.decisions.questionName")}
            value={name}
            taken={taken}
            onCommit={onRename}
            placeholder={t("playgroundDeep.decisions.namePlaceholder")}
          />
        </div>
        <div className="grid gap-1.5">
          <span className="text-sm font-medium">{t("playgroundDeep.decisions.answerType")}</span>
          <Select
            value={question.type}
            onValueChange={(type) => isQuestionType(type) && onChange(retype(question, type))}
          >
            <SelectTrigger className="w-full" aria-label={t("playgroundDeep.decisions.answerType")}>
              <SelectValue>{t(TYPE_LABEL_KEYS[question.type])}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {QUESTION_TYPES.map((type) => (
                <SelectItem
                  key={type}
                  value={type}
                  title={type === "noul" ? t("playgroundDeep.decisions.typeYesNoHelp") : undefined}
                >
                  {t(TYPE_LABEL_KEYS[type])}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor={instructionsId}>{t("playgroundDeep.decisions.instructions")}</Label>
        <Textarea
          id={instructionsId}
          rows={2}
          value={question.instructions ?? ""}
          placeholder={t("playgroundDeep.decisions.instructionsPlaceholder")}
          onChange={(event) => onChange({ ...question, instructions: event.target.value })}
        />
      </div>
      <CriteriaEditor question={question} onChange={onChange} />
    </fieldset>
  );
}

export default function SystemOneForm({ value, onChange, validation, onReset }: SystemOneFormProps) {
  const { t } = useTranslation();
  const stateId = useId();
  const form = useMemo(() => readForm(value), [value]);

  if (form === undefined) {
    return (
      <FormFrame validation={validation}>
        <p className="text-sm text-muted-foreground">{t("playgroundDeep.decisions.unsupportedShape")}</p>
        <Button variant="outline" className="w-fit" onClick={onReset}>
          {t("playgroundDeep.decisions.resetToExample")}
        </Button>
      </FormFrame>
    );
  }

  const questions = form.questions ?? {};
  const names = Object.keys(questions);
  const write = (next: FormPayload) => onChange(JSON.stringify(next, null, 2));
  const writeQuestions = (next: Record<string, FormQuestion>) => write({ ...form, questions: next });

  return (
    <FormFrame validation={validation}>
      <div className="grid gap-1.5">
        <Label htmlFor={stateId}>{t("playgroundDeep.decisions.input")}</Label>
        <p className="text-xs text-muted-foreground">{t("playgroundDeep.decisions.inputDescription")}</p>
        <Textarea
          id={stateId}
          rows={4}
          value={form.state ?? ""}
          placeholder={t("playgroundDeep.decisions.inputPlaceholder")}
          onChange={(event) => write({ ...form, state: event.target.value })}
        />
      </div>
      {Object.entries(questions).map(([name, question], index) => (
        <QuestionCard
          key={index}
          name={name}
          index={index}
          question={question}
          taken={names}
          onChange={(next) => writeQuestions({ ...questions, [name]: next })}
          onRename={(next) => writeQuestions(renameKey(questions, name, next))}
          onRemove={() => writeQuestions(withoutKey(questions, name))}
        />
      ))}
      <AddButton onClick={() => writeQuestions({ ...questions, [freeName(names, "question")]: blankQuestion() })}>
        {t("playgroundDeep.decisions.addQuestion")}
      </AddButton>
    </FormFrame>
  );
}
