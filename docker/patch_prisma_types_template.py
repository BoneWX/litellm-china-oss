"""Patch Prisma's generated-type template for Python 3.13 compatibility.

Prisma Client Python 0.11 uses a recursive Jinja macro whose closure variables
become cell objects on Python 3.13 and can resolve against generated model
objects instead of the template strings. The proxy only needs the base
generated types, so expand every macro call once without invoking the macro.
"""

import os
import re
from pathlib import Path

SCHEMA_PATH = Path(os.environ.get("PRISMA_SCHEMA_PATH", "/app/schema.prisma"))
TEMPLATE_PATH = Path(
    os.environ.get(
        "PRISMA_TEMPLATE_PATH",
        "/app/.venv/lib/python3.13/site-packages/prisma/generator/templates/types.py.jinja",
    )
)
MACRO_START = "{% macro recursive(base) %}"
MACRO_END = "{% endmacro %}"
REPLACEMENT = "{# recursive macro removed for Python 3.13 compatibility #}"
RECURSIVE_CALL = re.compile(
    r"{% call\((?P<name>\w+), (?P<next>\w+), (?P<iteration>\w+)\) "
    r"recursive\((?P<base>.*?)\) %}"
    r"(?P<body>.*?)"
    r"{% endcall %}",
    flags=re.DOTALL,
)


def replace_recursive_calls(template: str) -> str:
    """Expand recursive macro call sites using only local scalar values."""

    def replace(match: re.Match[str]) -> str:
        name = match.group("name")
        next_name = match.group("next")
        iteration = match.group("iteration")
        base = match.group("base")
        body = match.group("body")
        return (
            f"{{% set {name} = {base} %}}\n"
            f"{{% set {next_name} = '' %}}\n"
            f"{{% set {iteration} = '' %}}"
            f"{body}"
        )

    patched, replacements = RECURSIVE_CALL.subn(replace, template)
    if "{% call(" in patched:
        raise ValueError("Unsupported recursive Prisma template call remains")
    if replacements == 0 and MACRO_START in template:
        raise ValueError("Prisma recursive template calls were not found")
    return patched


def main() -> None:
    schema = SCHEMA_PATH.read_text(encoding="utf-8")
    SCHEMA_PATH.write_text(
        schema.replace("recursive_type_depth = -1", "recursive_type_depth = 2"),
        encoding="utf-8",
    )

    template = TEMPLATE_PATH.read_text(encoding="utf-8")
    if MACRO_START in template:
        start = template.index(MACRO_START)
        end = template.index(MACRO_END, start) + len(MACRO_END)
        template = f"{template[:start]}{REPLACEMENT}{template[end:]}"

    template = replace_recursive_calls(template)
    TEMPLATE_PATH.write_text(
        template,
        encoding="utf-8",
    )


if __name__ == "__main__":
    main()
