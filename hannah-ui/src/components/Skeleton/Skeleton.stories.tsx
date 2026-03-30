import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton, SkeletonGroup } from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: { width: 320 },
};

export const TextBlock: Story = {
  args: { lines: 4, width: 320 },
};

export const Card: Story = {
  render: () => (
    <div className="w-80 rounded-xl border border-gray-200 p-4 dark:border-gray-700">
      <Skeleton variant="rounded" height={160} />
      <SkeletonGroup className="mt-4">
        <div className="flex items-center gap-3">
          <Skeleton circle width={40} />
          <Skeleton variant="text" width="60%" />
        </div>
        <Skeleton variant="text" />
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="45%" />
      </SkeletonGroup>
    </div>
  ),
};

export const Shimmer: Story = {
  render: () => (
    <div className="w-80 space-y-3">
      <Skeleton animation="shimmer" variant="rounded" height={120} />
      <Skeleton animation="shimmer" />
      <Skeleton animation="shimmer" width="75%" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex items-end gap-6">
      <div className="space-y-2 text-center">
        <Skeleton variant="text" width={120} />
        <span className="text-xs text-gray-500">text</span>
      </div>
      <div className="space-y-2 text-center">
        <Skeleton variant="circular" width={48} height={48} />
        <span className="text-xs text-gray-500">circular</span>
      </div>
      <div className="space-y-2 text-center">
        <Skeleton variant="rectangular" width={120} height={48} />
        <span className="text-xs text-gray-500">rectangular</span>
      </div>
      <div className="space-y-2 text-center">
        <Skeleton variant="rounded" width={120} height={48} />
        <span className="text-xs text-gray-500">rounded</span>
      </div>
    </div>
  ),
};

export const TableRows: Story = {
  render: () => (
    <div className="w-[480px] rounded-lg border border-gray-200 dark:border-gray-700">
      {/* Header */}
      <div className="flex gap-4 border-b border-gray-200 p-3 dark:border-gray-700">
        <Skeleton width="20%" height={12} />
        <Skeleton width="30%" height={12} />
        <Skeleton width="25%" height={12} />
        <Skeleton width="15%" height={12} />
      </div>
      {/* Rows */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="flex items-center gap-4 border-b border-gray-100 p-3 last:border-b-0 dark:border-gray-800"
        >
          <Skeleton width="20%" />
          <Skeleton width="30%" />
          <Skeleton width="25%" />
          <Skeleton variant="rounded" width="15%" height={24} />
        </div>
      ))}
    </div>
  ),
};
