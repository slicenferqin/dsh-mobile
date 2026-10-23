# dsh-mobile

[简体中文](README.md) | English

A task-first, full-screen phone workspace for [DeepSeek Harness (DSH)](https://github.com/deepseek-ai/deepseek-harness). Find work that needs your attention, read a session overview, and continue the conversation using the same DSH Host and records.

This is an independent community UI plugin. It can run on its own in a reachable DSH browser. Add [dsh-remote-control](https://github.com/slicenferqin/dsh-remote-control) for temporary HTTPS access and phone pairing; install both for the current full phone experience.

## Promo video

https://github.com/user-attachments/assets/763e9698-6479-40da-9685-b201a600c2e4

[Download MP4](https://github.com/slicenferqin/dsh-mobile/releases/download/v0.1.0/DSH-Anywhere-30s.mp4) · [GIF preview](https://github.com/slicenferqin/dsh-mobile/releases/download/v0.1.0/DSH-Anywhere-preview.gif) · [Cover](https://github.com/slicenferqin/dsh-mobile/releases/download/v0.1.0/DSH-Anywhere-cover.png)

A 30-second promo in 16:9 at 1080p, 60 fps, with original music and sound effects, Chinese on-screen text, and no narration.

## Preview

<p align="center"><img src="docs/screenshots/mobile-overview.png" alt="Mobile session overview with public demonstration text" width="360"></p>

The screenshot uses the Chinese locale and a public demo session.

## Features

- **Tasks:** prioritize work waiting for you, then running and ready sessions; search by title or workspace and start a task in an existing workspace.
- **Overview:** show pending questions/approvals, the current stage, recent reply text, the latest completed reply, and collapsible earlier results.
- **Full record:** use DSH's existing conversation renderer for history, tool details, images, and interactions.
- **Compact input:** send text and stop tasks; **More tools** opens the full editor. Attachments, structured references, or commands automatically restore the full editor.
- **Device:** rename the current paired device when used with dsh-remote-control, or switch back to the desktop interface.

Overviews project text and state already present in the session. They are **not model-generated summaries** and make **no additional model calls**.

## Compatibility

- Node.js **22.19 or later**, DSH installed, and `pnpm` on `PATH` for profile package management.
- Declared DSH range: `>=0.2.1-rc.2 <0.3.0`. The Client/Slot APIs are pre-stable; upgrades may require plugin updates.
- Validated with a **DSH 0.2.1-rc.2 source build on macOS arm64**, including live browser use. Other OS/browser/device combinations have not all been validated end to end.
- This release targets the DSH Web UI. A wide desktop window keeps its normal layout by default.

## Install and start

Install the tagged release into the Web profile:

```sh
dsh plugin --profile web add github:slicenferqin/dsh-mobile#v0.1.0
```

For access from your phone over a temporary HTTPS tunnel, also install:

```sh
dsh plugin --profile web add github:slicenferqin/dsh-remote-control#v0.3.1
```

Start DSH with `dsh web` (or `dsh --profile web`). If already running, restart that profile after the CLI installation, then refresh the page. Release tarballs are also available from [GitHub Releases](https://github.com/slicenferqin/dsh-mobile/releases); npm publication is not required.

DSH's default Web listener is local to the computer (`127.0.0.1`); dsh-mobile itself does not expose it to a phone. For remote use, follow the [remote-control installation and pairing guide](https://github.com/slicenferqin/dsh-remote-control/blob/main/README.en.md#install-and-start): install cloudflared on the computer, enable **Settings → Remote control**, scan the QR code, confirm the device name, and explicitly tap **Pair and enter**. A Quick Tunnel needs no Cloudflare account or domain, but first startup can take nearly a minute. Its bridge requires a DSH origin using `localhost`, `127.0.0.1`, or `[::1]`, and does not support LAN/wildcard targets.

## Use and configuration

The workspace opens automatically at a viewport width of **900 CSS pixels or less**. Bottom navigation provides **Tasks**, **Session**, and **Device**. Open a task to start with its overview; switch to **Full record** for the complete conversation UI. New tasks use an existing DSH workspace; create any missing workspace in the desktop interface first.

Under **Device → Switch to desktop**, return to the original interface. On narrow screens, a button at the bottom of the desktop interface restores the phone workspace. There is no separate phone-workspace entry in the Settings sidebar.

There are no Host configuration fields in this release. Layout and selected-session preferences are stored only in the current browser. The default automatic layout leaves wide desktop windows unchanged; a manually restored phone-workspace preference applies to that browser.

## Limits and security scope

The overview uses **loaded session history**, showing the latest completed text reply and up to three earlier completed results. It does not claim to summarize the entire stored history or infer completion from unfinished text. Reasoning, raw tool arguments, images, and long logs are outside the overview; use **Full record** for them and **More tools** for complex input or actions.

The plugin presents existing DSH data and uses its session, input, queue, stop, question, and approval mechanisms. It does not add a network listener, remote-access service, separate account, or permission boundary. Actions retain the Host's existing permissions. Device self-renaming requires a paired remote-control connection; the rest of the workspace works without that plugin.

With dsh-remote-control, a paired phone has **owner access to the Host**, including available local-file and command capabilities under its permission policy. It is not a read-only view or OS remote desktop, and it does not lock the computer. See the [remote plugin's security and lifetime documentation](https://github.com/slicenferqin/dsh-remote-control/blob/main/README.en.md#security-scope-and-limits). Its default 8-hour access and rolling 10-day refresh window apply only while the same remote entry continues running: disabling it, restarting DSH, reloading the Host plugin, or changing tunnel domain clears pairings.

## Development and tests

Readable source, build scripts, and tests are included. From a checkout or extracted source package:

```sh
pnpm install --ignore-scripts
pnpm run build
pnpm run check
pnpm test
```

The build bundles Markdown parsing and sanitization and loads React from the DSH Host at runtime. Tests cover overview text selection, completion evidence, history bounds, progress, and pending-interaction priority. They do not replace browser/device checks. To try a local checkout, run `dsh plugin --profile web add .` from this repository's root, then restart the Web profile and refresh its page.

## License

[MIT](LICENSE). Bundled third-party dependencies are documented in [Third-party notices](THIRD_PARTY_NOTICES.md).
