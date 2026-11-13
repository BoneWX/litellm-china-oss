import { Badge } from "@/components/ui/badge";
import type { TFunction } from "i18next";
import { CircleAlert, CircleCheck, TriangleAlert } from "lucide-react";
import { useTranslation } from "react-i18next";
import { errorCount as countErrors, type PayloadValidation } from "./lib/validatePayload";

export function ValidationStatus({ validation }: { validation: PayloadValidation<unknown> }) {
  const { t } = useTranslation();
  const errorCount = countErrors(validation);
  if (errorCount > 0) {
    return (
      <Badge variant="destructive">
        {errorCount === 1
          ? t("playgroundDeep.decisions.issueCountOne", { count: errorCount })
          : t("playgroundDeep.decisions.issueCount", { count: errorCount })}
      </Badge>
    );
  }
  return <Badge variant="secondary">{t("playgroundDeep.decisions.validPayloadStatus")}</Badge>;
}

export function ValidationSummary({ validation }: { validation: PayloadValidation<unknown> }) {
  const { t } = useTranslation();
  const errorCount = countErrors(validation);
  return (
    <p role="status" aria-live="polite" className="flex min-w-0 items-center gap-2 text-sm">
      {errorCount === 0 ? (
        <CircleCheck className="size-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
      ) : (
        <CircleAlert className="size-4 shrink-0 text-destructive" />
      )}
      <span className={errorCount === 0 ? "text-muted-foreground" : "text-destructive"}>
        {validationSummaryText(errorCount, t)}
      </span>
    </p>
  );
}

export function IssueList({ id, validation }: { id: string; validation: PayloadValidation<unknown> }) {
  const { t } = useTranslation();
  if (validation.issues.length === 0) {
    return null;
  }
  return (
    <ul
      id={id}
      aria-label={t("playgroundDeep.decisions.validationIssues")}
      className="grid max-h-36 gap-1 overflow-auto border-t px-3 py-2"
    >
      {validation.issues.map((issue, index) => (
        <li key={`${issue.path}-${index}`} className="flex items-start gap-1.5 text-xs">
          {issue.severity === "error" ? (
            <CircleAlert className="mt-0.5 size-3.5 shrink-0 text-destructive" />
          ) : (
            <TriangleAlert className="mt-0.5 size-3.5 shrink-0 text-amber-600 dark:text-amber-400" />
          )}
          <span className="shrink-0 font-medium">{translateIssueLabel(issue.path, t)}</span>
          <span>{translateIssueMessage(issue.message, t)}</span>
        </li>
      ))}
    </ul>
  );
}

function validationSummaryText(errorCount: number, t: TFunction): string {
  if (errorCount === 0) return t("playgroundDeep.decisions.readyToSend");
  if (errorCount === 1) return t("playgroundDeep.decisions.issuesToFixOne", { count: errorCount });
  return t("playgroundDeep.decisions.issuesToFix", { count: errorCount });
}

function translateIssueLabel(path: string, t: TFunction): string {
  const [head, question, field] = path.split(".");
  const topLevelKeys = {
    state: "playgroundDeep.decisions.input",
    input: "playgroundDeep.decisions.input",
    model: "playgroundDeep.decisions.model",
    questions: "playgroundDeep.decisions.questions",
    safety_identifier: "playgroundDeep.decisions.safetyIdentifier",
    root: "playgroundDeep.decisions.request",
    syntax: "playgroundDeep.decisions.request",
  } as const;
  if (head !== "questions" || question === undefined) {
    return topLevelKeys[head as keyof typeof topLevelKeys] ? t(topLevelKeys[head as keyof typeof topLevelKeys]) : head;
  }

  const questionLabel = /^\d+$/.test(question)
    ? t("playgroundDeep.decisions.questionNumber", { number: Number(question) + 1 })
    : t("playgroundDeep.decisions.questionNamed", { name: question });
  if (field === undefined) return questionLabel;

  const fieldKeys = {
    name: "playgroundDeep.decisions.name",
    type: "playgroundDeep.decisions.answerType",
    instructions: "playgroundDeep.decisions.instructions",
    criteria: "playgroundDeep.decisions.options",
    choices: "playgroundDeep.decisions.choices",
    levels: "playgroundDeep.decisions.levels",
  } as const;
  return `${questionLabel} ${fieldKeys[field as keyof typeof fieldKeys] ? t(fieldKeys[field as keyof typeof fieldKeys]) : field}`;
}

function translateIssueMessage(message: string, t: TFunction): string {
  const directKeys = {
    "Give every question a name.": "playgroundDeep.decisions.giveEveryQuestionName",
    "Payload cannot be empty.": "playgroundDeep.decisions.payloadCannotBeEmpty",
    "Add the text the model should decide about.": "playgroundDeep.decisions.addDecisionText",
    "Payload must be a JSON object.": "playgroundDeep.decisions.validationMessages.payloadObject",
    "At least one question is required.": "playgroundDeep.decisions.validationMessages.atLeastOneQuestion",
    "Questions must be a non-empty object.": "playgroundDeep.decisions.validationMessages.questionsObject",
    "Model must be a non-empty string.": "playgroundDeep.decisions.validationMessages.modelNonEmpty",
    "Instructions must be a string.": "playgroundDeep.decisions.validationMessages.instructionsString",
    "Choice descriptions must be strings.": "playgroundDeep.decisions.validationMessages.choiceDescriptions",
    "Choice criteria must be an object mapping labels to descriptions.":
      "playgroundDeep.decisions.validationMessages.choiceCriteriaObject",
    "A yes / no question requires instructions or criteria.":
      "playgroundDeep.decisions.validationMessages.yesNoRequiresContent",
    "Noul true criteria must be a string.": "playgroundDeep.decisions.validationMessages.noulTrue",
    "Noul false criteria must be a string.": "playgroundDeep.decisions.validationMessages.noulFalse",
    "Noul criteria, when provided, must be an object.": "playgroundDeep.decisions.validationMessages.noulObject",
    "Score levels must be strings.": "playgroundDeep.decisions.validationMessages.scoreLevelsString",
    "Score criteria must be an array of levels.": "playgroundDeep.decisions.validationMessages.scoreCriteriaArray",
    "Question type must be choice, noul, or score.": "playgroundDeep.decisions.validationMessages.questionType",
    "Question must be an object.": "playgroundDeep.decisions.validationMessages.questionObject",
    "Choice values must be unique, including their string representations.":
      "playgroundDeep.decisions.validationMessages.uniqueChoices",
  } as const;
  const directKey = directKeys[message as keyof typeof directKeys];
  if (directKey) return t(directKey);

  const required = /^Required property '(.+)' is missing\.$/.exec(message);
  if (required) {
    return t("playgroundDeep.decisions.validationMessages.requiredProperty", { property: required[1] });
  }
  const choiceRange = /^Choice criteria must contain between (\d+) and (\d+) options\.$/.exec(message);
  if (choiceRange) {
    return t("playgroundDeep.decisions.validationMessages.choiceRange", {
      min: choiceRange[1],
      max: choiceRange[2],
    });
  }
  const questionRange = /^Questions must contain between (\d+) and (\d+) entries\.$/.exec(message);
  if (questionRange) {
    return t("playgroundDeep.decisions.validationMessages.questionRange", {
      min: questionRange[1],
      max: questionRange[2],
    });
  }
  const scoreMinimum = /^Score criteria must contain at least (\d+) levels\.$/.exec(message);
  if (scoreMinimum) {
    return t("playgroundDeep.decisions.validationMessages.scoreMinimum", { count: scoreMinimum[1] });
  }
  const scoreWarnings = /^More than (\d+) score levels may reduce result quality\.$/.exec(message);
  if (scoreWarnings) {
    return t("playgroundDeep.decisions.tooManyScoreLevels", { count: scoreWarnings[1] });
  }
  const invalidJson = /^Invalid JSON syntax: (.+)$/.exec(message);
  if (invalidJson) {
    return t("playgroundDeep.decisions.invalidJson", { message: invalidJson[1] });
  }
  return message;
}
