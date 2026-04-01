import type { StorybookConfig } from "@storybook/react-vite"
import tailwindcss from "@tailwindcss/vite"

const config: StorybookConfig = {
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    stories: ["../src/**/*.stories.@(ts|tsx)"],
    addons: ["@storybook/addon-docs"],
    viteFinal(config) {
        config.plugins = config.plugins || []
        config.plugins.push(tailwindcss())
        return config
    },
}

export default config