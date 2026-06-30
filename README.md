# @sapyhte/design-system

A React component library built with TypeScript and powered by design tokens.

## Installation

```bash
npm install @sapyhte/design-system
```

**Peer dependencies:** `react` ^18.3.1, `react-dom` ^18.3.1

## Usage

```tsx
import { Button, Badge, Stack } from "@sapyhte/design-system";
import "@sapyhte/design-system/styles/index.css";

function App() {
  return (
    <Stack spacing={4}>
      <Badge colorPalette="saphyte">New</Badge>
      <Button variant="solid" colorPalette="saphyte">
        Get Started
      </Button>
    </Stack>
  );
}
```

## Components

### Layout
| Component | Description |
|-----------|-------------|
| [Stack](/src/components/Stack) | Flexbox layout with spacing, alignment, and direction control |
| [Card](/src/components/Card) | Container with header, body, and footer sections |
| [Divider](/src/components/Divider) | Horizontal or vertical divider with optional label |
| [Separator](/src/components/Separator) | Accessible separator with optional label |
| [Tabs](/src/components/Tabs) | Tabbed interface with lazy loading support |
| [Accordion](/src/components/Accordion) | Collapsible content panels with single/multi expand |
| [Table](/src/components/Table) | Data table with sticky headers, sorting, and selection |
| [Stat](/src/components/Stat) | Statistical display with label, number, and trend arrow |
| [Steps](/src/components/Steps) | Multi-step progress indicator |

### Forms & Inputs
| Component | Description |
|-----------|-------------|
| [Button](/src/components/Button) | Button with variants, sizes, loading state, and icons |
| [IconButton](/src/components/IconButton) | Icon-only button with size/variant/color control |
| [Input](/src/components/Input) | Text input with validation, icons, and error states |
| [Textarea](/src/components/Textarea) | Multi-line text input with validation |
| [Select](/src/components/Select) | Dropdown select with validation |
| [Checkbox](/src/components/Checkbox) | Checkbox with indeterminate state |
| [Radio](/src/components/Radio) | Single radio button |
| [RadioGroup](/src/components/RadioGroup) | Radio group with orientation and description support |
| [Switch](/src/components/Switch) | Toggle switch |
| [Slider](/src/components/Slider) | Range slider with marks and labels |
| [SegmentedControl](/src/components/SegmentedControl) | Segmented button group |

### Overlays
| Component | Description |
|-----------|-------------|
| [Modal](/src/components/Modal) | Dialog with focus trapping, keyboard handling, and portal |
| [Drawer](/src/components/Drawer) | Slide-in panel from any edge |
| [Popover](/src/components/Popover) | Floating content with arrow and positioning |
| [Tooltip](/src/components/Tooltip) | Hover/focus tooltip |

### Navigation
| Component | Description |
|-----------|-------------|
| [Breadcrumb](/src/components/Breadcrumb) | Breadcrumb navigation with items, links, and separators |
| [Menu](/src/components/Menu) | Dropdown menu with items, groups, and dividers |
| [Pagination](/src/components/Pagination) | Page navigation with ellipsis and first/last buttons |

### Feedback
| Component | Description |
|-----------|-------------|
| [Alert](/src/components/Alert) | Status alerts with icon, title, description, and dismiss |
| [Progress](/src/components/Progress) | Progress bar with indeterminate, striped, and animated modes |
| [EmptyState](/src/components/EmptyState) | Empty state placeholder with icon, title, and action |
| [Spinner](/src/components/Spinner) | Loading spinner with configurable size and thickness |
| [Skeleton](/src/components/Skeleton) | Content placeholder skeleton |

### Data Display
| Component | Description |
|-----------|-------------|
| [Badge](/src/components/Badge) | Status badge with color palette |
| [Tag](/src/components/Tag) | Closable tag with label, icon, and close button |
| [Avatar](/src/components/Avatar) | User avatar with initials or image |
| [Kbd](/src/components/Kbd) | Keyboard shortcut display |
| [Icon](/src/components/Icon) | SVG icon renderer from icon set |

## Design Tokens

The design system uses [Style Dictionary](https://amzn.github.io/style-dictionary/) for token management.

```bash
npm run build:tokens
```

Token files are located in [`tokens/`](/tokens):
- `primitives.json` — base colors, spacing, radii
- `light.json` / `dark.json` — theme-specific aliases
- `sizes.json` — component size specifications
- `typography.json` — font families, sizes, weights

## Development

```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook

# Build the library
npm run build

# Run tests
npm test

# Type-check
npm run typecheck

# Build tokens
npm run build:tokens
```

### Testing

- **Unit tests**: Vitest + React Testing Library (`npm test`)
- **Storybook tests**: `@storybook/test-runner` for CI smoke tests (`npm run test:storybook`)

### Storybook

- Local: `npm run storybook` (port 6006)
- Build: `npm run build:storybook`
- Chromatic: `npm run deploy:chromatic`

## License

MIT
