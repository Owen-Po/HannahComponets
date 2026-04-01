import type { Meta, StoryObj } from "@storybook/react";
import { useState, useCallback } from "react";
import { KanbanBoard } from "./KanbanBoard";
import type { KanbanColumn, KanbanCard } from "./KanbanBoard";

const meta: Meta<typeof KanbanBoard> = {
  title: "Components/KanbanBoard",
  component: KanbanBoard,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof KanbanBoard>;

// ── Shared data ────────────────────────────────────────────────────────────────

const sampleColumns: KanbanColumn[] = [
  {
    id: "backlog",
    title: "Backlog",
    color: "#94a3b8",
    cards: [
      {
        id: "b1",
        title: "Redesign settings page",
        description: "Update the settings UI to match the new design system tokens.",
        tags: [{ label: "Frontend", color: "#6366f1" }],
        assignee: { name: "Ana Torres" },
        priority: "low",
        dueDate: "Apr 15",
      },
      {
        id: "b2",
        title: "Add CSV export to reports",
        description: "Allow users to download report data as CSV files.",
        tags: [{ label: "Feature", color: "#10b981" }],
        assignee: { name: "Carlos Ruiz" },
        priority: "medium",
        dueDate: "Apr 20",
      },
      {
        id: "b3",
        title: "Audit accessibility on forms",
        tags: [{ label: "A11y", color: "#f59e0b" }],
        priority: "medium",
      },
      {
        id: "b4",
        title: "Update API rate-limiting docs",
        description: "Document new rate limits for v2 endpoints.",
        tags: [{ label: "Docs", color: "#8b5cf6" }],
        assignee: { name: "Laura Mendez" },
        priority: "low",
      },
      {
        id: "b5",
        title: "Investigate flaky E2E tests",
        tags: [{ label: "Bug", color: "#ef4444" }],
        priority: "high",
        assignee: { name: "Diego Soto" },
      },
    ],
  },
  {
    id: "in-progress",
    title: "In Progress",
    color: "#3b82f6",
    cards: [
      {
        id: "p1",
        title: "Implement notification center",
        description: "Real-time notification dropdown with mark-as-read functionality.",
        tags: [
          { label: "Feature", color: "#10b981" },
          { label: "Frontend", color: "#6366f1" },
        ],
        assignee: { name: "Maria Lopez" },
        priority: "high",
        dueDate: "Apr 5",
      },
      {
        id: "p2",
        title: "Fix date picker timezone bug",
        description: "Dates shift by one day for UTC-negative timezones.",
        tags: [{ label: "Bug", color: "#ef4444" }],
        assignee: { name: "Juan Garcia" },
        priority: "urgent",
        dueDate: "Apr 2",
      },
      {
        id: "p3",
        title: "Migrate auth to OAuth 2.0",
        tags: [{ label: "Backend", color: "#f97316" }],
        assignee: { name: "Ana Torres" },
        priority: "high",
      },
    ],
  },
  {
    id: "review",
    title: "Review",
    color: "#a855f7",
    cards: [
      {
        id: "r1",
        title: "Refactor table virtualization",
        description: "Switch from react-window to TanStack Virtual for better perf.",
        tags: [{ label: "Frontend", color: "#6366f1" }],
        assignee: { name: "Carlos Ruiz" },
        priority: "medium",
        dueDate: "Apr 3",
      },
      {
        id: "r2",
        title: "Add dark mode to dashboard",
        tags: [
          { label: "Feature", color: "#10b981" },
          { label: "Frontend", color: "#6366f1" },
        ],
        assignee: { name: "Diego Soto" },
        priority: "low",
      },
    ],
  },
  {
    id: "done",
    title: "Done",
    color: "#22c55e",
    cards: [
      {
        id: "d1",
        title: "Setup CI/CD pipeline",
        tags: [{ label: "DevOps", color: "#06b6d4" }],
        assignee: { name: "Laura Mendez" },
        priority: "high",
      },
      {
        id: "d2",
        title: "Create button component library",
        tags: [{ label: "Frontend", color: "#6366f1" }],
        assignee: { name: "Maria Lopez" },
        priority: "medium",
      },
      {
        id: "d3",
        title: "Write onboarding flow tests",
        tags: [{ label: "Testing", color: "#f59e0b" }],
        assignee: { name: "Juan Garcia" },
        priority: "low",
      },
      {
        id: "d4",
        title: "Fix memory leak in WebSocket hook",
        tags: [{ label: "Bug", color: "#ef4444" }],
        assignee: { name: "Carlos Ruiz" },
        priority: "urgent",
      },
    ],
  },
];

// ── Stories ─────────────────────────────────────────────────────────────────────

export const Default: Story = {
  args: {
    columns: sampleColumns,
    onAddCard: (columnId: string) => alert(`Add card to ${columnId}`),
    onCardClick: (card: KanbanCard) => alert(`Clicked: ${card.title}`),
  },
};

export const WithWIPLimits: Story = {
  args: {
    columns: sampleColumns.map((col) =>
      col.id === "in-progress" ? { ...col, limit: 3 } : col
    ),
    onAddCard: (columnId: string) => alert(`Add card to ${columnId}`),
  },
};

export const CustomCard: Story = {
  args: {
    columns: sampleColumns.slice(0, 2),
    renderCard: (card: KanbanCard) => (
      <div className="rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 p-3 border border-indigo-200/50 dark:border-indigo-700/40">
        <span className="text-[13px] font-bold text-indigo-700 dark:text-indigo-300">
          {card.title}
        </span>
        {card.priority && (
          <span className="ml-2 text-[10px] uppercase tracking-wider text-indigo-400">
            {card.priority}
          </span>
        )}
      </div>
    ),
  },
};

// ── Interactive (stateful) ─────────────────────────────────────────────────────

function InteractiveBoard() {
  const [columns, setColumns] = useState<KanbanColumn[]>(sampleColumns);

  const handleCardMove = useCallback(
    (cardId: string, fromColumn: string, toColumn: string, newIndex: number) => {
      setColumns((prev) => {
        const next = prev.map((col) => ({ ...col, cards: [...col.cards] }));
        const srcCol = next.find((c) => c.id === fromColumn);
        const dstCol = next.find((c) => c.id === toColumn);
        if (!srcCol || !dstCol) return prev;

        const cardIdx = srcCol.cards.findIndex((c) => c.id === cardId);
        if (cardIdx === -1) return prev;

        const [card] = srcCol.cards.splice(cardIdx, 1);

        // Adjust index if moving within the same column
        const adjustedIndex =
          fromColumn === toColumn && cardIdx < newIndex
            ? newIndex - 1
            : newIndex;

        dstCol.cards.splice(adjustedIndex, 0, card);
        return next;
      });
    },
    []
  );

  const handleAddCard = useCallback((columnId: string) => {
    const id = `new-${Date.now()}`;
    setColumns((prev) =>
      prev.map((col) =>
        col.id === columnId
          ? {
              ...col,
              cards: [
                ...col.cards,
                {
                  id,
                  title: "New task",
                  description: "Click to edit this card.",
                  priority: "low" as const,
                },
              ],
            }
          : col
      )
    );
  }, []);

  return (
    <div className="h-screen bg-white dark:bg-gray-950">
      <KanbanBoard
        columns={columns}
        onCardMove={handleCardMove}
        onAddCard={handleAddCard}
        onCardClick={(card) => alert(`Clicked: ${card.title}`)}
      />
    </div>
  );
}

export const Interactive: Story = {
  render: () => <InteractiveBoard />,
};
