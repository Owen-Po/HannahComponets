import type { StorybookConfig } from "@storybook/react-vite"
import tailwindcss from "@tailwindcss/vite"

import path from "path"

const config: StorybookConfig = {
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    stories: ["../src/**/*.stories.@(ts|tsx)", "../packages/**/*.stories.@(ts|tsx)"],
    addons: ["@storybook/addon-docs"],
    viteFinal(config) {
        config.plugins = config.plugins || []
        config.plugins.push(tailwindcss())
        
        config.plugins.push({
            name: "hannah-ui-monorepo-alias",
            enforce: "pre",
            resolveId(source) {
                if (source.startsWith("@hannah-ui/")) {
                    const pkg = source.replace("@hannah-ui/", "");
                    return path.resolve(process.cwd(), `packages/${pkg}/src/index.ts`);
                }
            }
        });

        return config
    },
}

export default config