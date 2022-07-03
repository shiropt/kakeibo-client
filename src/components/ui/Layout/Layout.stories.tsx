import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Layout } from "./Layout";

export default {
  title: "components/ui/Layout",
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args}>children</Layout>;

export const Default = Template.bind({});

export const HasTitle = Template.bind({});
HasTitle.args = {
  title: "title",
};
