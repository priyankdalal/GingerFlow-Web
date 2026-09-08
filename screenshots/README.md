# Website screenshots

The PNG files in this folder are the live site screenshots.

| File | Shown as | Current size |
| --- | --- | --- |
| `editor.png` | Workflow editor (wide, full-width) | 1919 x 1033 |
| `inspector.png` | Node inspector | 407 x 942 |
| `timeline.png` | Execution timeline | 384 x 278 |
| `plugin-manager.png` | Plugin Manager | 985 x 661 |
| `console.png` | Output console | 1275 x 512 |

## Replacing a screenshot

The gallery uses fixed-height frames with `object-fit: contain`, so images of
any aspect ratio stay aligned — cards never stretch to match their image. You do
not need to match the sizes above.

Two things must stay in sync when you swap a file:

- Update the `width` and `height` attributes on the matching `<img>` in
  `index.html` to the real pixel size. These reserve layout space and prevent
  content shift while the page loads; stale values reintroduce that shift.
- If the new image is smaller than its frame (roughly under 400px tall), add the
  `shot-small` class to its `<figure>` so it renders at native size instead of
  being upscaled and looking soft. `timeline.png` uses this today. Remove the
  class if you replace it with a larger capture.

## Capture guidance

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
