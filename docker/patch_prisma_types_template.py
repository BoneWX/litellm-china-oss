"""Patch Prisma's generated-type template for Python 3.13 compatibility.

Prisma Client Python 0.11 uses a recursive Jinja macro whose closure variables
become cell objects on Python 3.13. The proxy only needs the base generated
types, so replace that macro with its non-recursive base expansion.
"""

from pathlib import Path

SCHEMA_PATH = Path("/app/schema.prisma")
TEMPLATE_PATH = Path(
    "/app/.venv/lib/python3.13/site-packages/prisma/generator/templates/types.py.jinja"
)
MACRO_START = "{% macro recursive(base) %}"
MACRO_END = "{% endmacro %}"
REPLACEMENT = """{% macro recursive(base) %}
{{ caller(base, base, '') }}
{% endmacro %}"""


def main() -> None:
    schema = SCHEMA_PATH.read_text(encoding="utf-8")
    SCHEMA_PATH.write_text(
        schema.replace("recursive_type_depth = -1", "recursive_type_depth = 2"),
        encoding="utf-8",
    )

    template = TEMPLATE_PATH.read_text(encoding="utf-8")
    start = template.index(MACRO_START)
    end = template.index(MACRO_END, start) + len(MACRO_END)
    TEMPLATE_PATH.write_text(
        f"{template[:start]}{REPLACEMENT}{template[end:]}",
        encoding="utf-8",
    )


if __name__ == "__main__":
    main()
