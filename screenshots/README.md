# Website screenshots

The PNG files in this folder are **placeholders**. Replace each one with a real
screenshot of the application, keeping the same file name so no HTML changes are
needed.

| File | Shown as | Expected size |
| --- | --- | --- |
| `editor.png` | Workflow editor (wide, full-width) | 1600 x 1000 |
| `inspector.png` | Node inspector | 1200 x 900 |
| `timeline.png` | Execution timeline | 1200 x 900 |
| `plugin-manager.png` | Plugin Manager | 1200 x 900 |
| `console.png` | Output console | 1200 x 900 |

## Capture guidance

- Use the exact pixel sizes above. The `<img>` tags in `index.html` declare these
  `width`/`height` values to reserve layout space and avoid content shift while
  loading. If you use different dimensions, keep the same aspect ratio
  (16:10 for `editor.png`, 4:3 for the rest) or update the attributes to match.
- Capture the window only, not the full desktop.
- Use a sample workflow with readable node names. Avoid real credentials,
  internal hostnames, file paths, tokens, or customer data — these images are
  public and are also submitted to image search via `sitemap.xml`.
- Save as PNG and compress before committing; large images slow the page down.

## After replacing

`editor.png` is also the Open Graph / Twitter preview image referenced in the
`index.html` `<head>`, so it is what appears when the site is shared on social
media. Check that it still reads well when cropped.

The five files are listed in `sitemap.xml` and in the `SoftwareApplication`
JSON-LD `screenshot` array in `index.html`. Update both if you add, remove, or
rename any file.
