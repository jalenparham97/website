---
name: simplify-code
description: "Use when simplifying existing code or improving comments without changing behavior. Good for requests like simplify this, clean this up, make this more direct, reduce complexity, remove overengineering, remove redundant logic, or rewrite comments so they are clearer and more explicit. Focus on deleting unnecessary code, flattening control flow, and relying on real invariants instead of adding helper layers."
---

## This skill is for simplifying existing code so it is smaller, flatter, and easier to read without changing what it does.

Use this when the user wants code to feel less overbuilt, more direct, or easier to maintain.

## Goal

Reduce complexity at the source.

Prefer removing code over moving it.
Prefer one clear path over multiple defensive branches.
Prefer using existing guarantees over rebuilding safety nets the surrounding code already provides.

## What Good Simplification Looks Like

- Remove repeated work so the same job happens in one place instead of several.
- Delete branches, guards, and special cases that are not carrying their weight.
- Keep the real preconditions and invariants, and remove checks that only repeat what is already guaranteed.
- Reduce the number of moving parts needed to understand the code from top to bottom.
- Remove stale options, flags, callbacks, variables, and plumbing that no longer change behavior.
- Keep variable names meaningful, but avoid temporary values that only restate the obvious.

## Commenting Style

When updating comments, keep the style a mix of plain English and technical detail so the comment is easy to scan but still useful for someone working on the implementation.

- Explain the purpose of the code in simple, direct language.
- Include enough technical detail to be useful for someone working on the implementation.
- Make it clear why the step exists, not just what it does.
- Prefer short, practical comments over vague or decorative ones.
- Use concise PHPDoc, JSDoc, or inline comments for public methods, non-obvious helpers, and branches that carry business meaning.
- Keep PHPDoc and JSDoc structure intact, including @param, @return, @var, and other annotations.
- Preserve all type information such as string, int, array, bool, and mixed.
- Update only the descriptive text portions of PHPDoc or JSDoc comments unless a new comment is clearly needed.
- Add a short example when the method or flow is not obvious from the signature alone.
- Preserve existing comments unless the user explicitly asks to remove them; when comments are already present, update them to be clearer rather than deleting them.

Example:

Before:

```php
// Set the value
$Result = $Value;
```

After:

```php
// Keep the original value so the caller can inspect the final state.
$Result = $Value;
```

Good comments should feel helpful and specific, not decorative.

## What Not To Do

- Do not "simplify" by adding wrappers, manager objects, or helper layers around the same complexity.
- Do not extract helpers unless the repeated logic is real and the extraction makes the code plainly easier to follow.
- Do not turn straightforward code into clever chained expressions just to make it shorter.
- Do not broaden the scope into renames, style cleanups, or unrelated refactors.
- Do not add defensive coding unless the existing behavior truly requires it.

## Workflow

1. Read the current controlling code path first.
2. Identify what complexity is actually unnecessary.
3. Look for real invariants already guaranteed by the caller, framework, or existing state.
4. Remove duplication, unnecessary branching, or dead plumbing directly.
5. Keep the public behavior the same unless the user asked for a behavior change too.
6. Validate the touched files after the simplification.

## Heuristics

- If two branches end in the same action, build the final input once and do the action once.
- If a precondition governs the whole block, prefer one early return over repeated checks deeper in the code.
- If a value is already guaranteed by the surrounding code, stop revalidating or reshaping it.
- If a variable only restates an expression once and does not improve readability, inline it.
- If a flag, option, callback, or argument no longer changes behavior, remove it end-to-end.
- If data is only being passed through one extra layer, remove the layer.
- If a loop is only transforming or filtering simple values, use the most direct form. This may be a loop or array methods depending on which reads better.
- If comments explain complexity that can be deleted instead, delete the complexity first.
- If two code paths differ only in a small piece of data, keep one path and vary the data.
- If the code is coordinating the same state in multiple places, look for the single source of truth and remove the extra synchronization.

## Small Example

Before:

```javascript
if (!RecordID) {
	return;
}

if (Mode === "archive") {
	SaveRecord(RecordID, { Archived: true });
	return;
}

SaveRecord(RecordID, { Archived: false });
```

After:

```javascript
if (!RecordID) {
	return;
}

const Changes = {
	Archived: Mode === "archive",
};

SaveRecord(RecordID, Changes);
```

This is better because it keeps the real guard clause, removes duplicate work, and varies only the data instead of splitting into multiple full code paths.

## Review Standard

After simplifying, check:

- Is the code shorter for a real reason?
- Is the control flow easier to follow from top to bottom?
- Did we remove redundant work instead of relocating it?
- Are the remaining branches all behaviorally necessary?
- Did we preserve the current behavior?

## Good Outcome

The result should feel more obvious, not more abstract.

Someone reading the file should see fewer moving parts, fewer special cases, and fewer places where the code is doing the same job twice.
