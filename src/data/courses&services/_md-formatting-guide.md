# Courses & Services Markdown Format Guide

This file documents the required formatting for files in `src/data/courses&services/*.md`.

## Required Frontmatter
Each file must include the following fields:

```yaml
---
title: <string>
description: <string>
header: <image path>
heroImage: <image path>
sub: <string>
order: <number>
# optional:
# draft: true|false
---
```

Notes:
- `header` and `heroImage` must point to valid image assets.
- `order` controls list position in the Courses & Services section.

## Body Rendering Rules
Body content is rendered by an HTML-safe parser that supports both single-line and multiline HTML blocks.

- Plain text lines outside HTML blocks are auto-wrapped as `<p>...</p>`.
- Empty lines are ignored.
- Text inside supported multiline HTML blocks is preserved as text content.
- Start/end tags tolerate extra whitespace, for example `<p >` and `</p >`.

## Allowed HTML Tags
Only these tags are passed through as HTML:
- `<h1>` to `<h6>`
- `<p>`
- `<a>`
- `<img>`
- `<br>`
- `<div>`
- `<section>`

These may be used in single-line or multiline form.

## Unsupported / Constrained Patterns
These are not supported by the current parser and should not be used:
- `<ul>`, `<ol>`, `<li>`, `<table>`, and other tags not listed above
- Unsupported tags will be rendered as escaped text

## Practical Examples

### Good
```html
<section class="not-content mt-10">
<h2>Heading</h2>
<p>Body text.</p>
<div class="grid md:grid-cols-2 gap-4">
<p>Left column text.</p>
<img src="/images/example.jpg" alt="Example" />
</div>
</section>
```

### Avoid
```html
<ul>
<li>List items are unsupported by current parser.</li>
</ul>
```
