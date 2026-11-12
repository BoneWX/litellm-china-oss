# Third-Party and Upstream Notices

## LiteLLM

This project contains code derived from LiteLLM:

- Upstream repository: https://github.com/BerriAI/litellm
- Upstream copyright: Copyright (c) 2023 Berri AI
- Upstream version used as the initial baseline: 1.109.0
- Baseline commit: d5ca88900c4ec558fdf9c7f9084484896221a366
- Upstream license: MIT, except for content under directories that contain their own license statement

The complete upstream license text is preserved in `LICENSE`.

## Community Modifications

Community modifications in this project are maintained by BoneWX and are released under the same MIT terms, without removing or replacing the upstream copyright notice.

This is an OSS-only distribution. It intentionally excludes:

- The upstream commercial `enterprise/` source directory.
- The `litellm-enterprise` dependency and installed `litellm_enterprise` Python package.
- Enterprise COPY and runtime-mount instructions in the container build.
- Enterprise-only admin UI and compatibility link assets.

The BerriAI Enterprise license and code are not included or sublicensed by this project. Users who require enterprise SSO, enterprise callback integrations, managed files, managed vector stores, enterprise projects, secret detection, or other enterprise-only functionality must use the upstream LiteLLM offering or obtain the appropriate authorization from BerriAI.

The modifications currently focus on:

- China holiday calendars for off-peak pricing
- Review and confirmation workflows for official holiday notices
- Simplified Chinese localization
- CNY currency display
- Build support for constrained network environments

This project is unofficial and is not affiliated with, endorsed by, or sponsored by Berri AI.

## Third-Party Dependencies

Third-party Python packages, npm packages, container images, fonts, icons, and other assets remain subject to their respective licenses. Their license files and package metadata should be retained when building or redistributing the project.
