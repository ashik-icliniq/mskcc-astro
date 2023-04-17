
 

import React from 'react';
import { within, fireEvent, userEvent, screen } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Messages from '../components/Messages';
import "./global-test.css";
import * as CONSTANTS from '../constants';
import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: 'Tests/Messages',
  component: Messages,
} as Meta;

const Template : StoryFn = (args) => <Messages {...args} />;

export const MessagesTest = Template.bind({});

// CasesTest.parameters = {
//   design: {
//     type: "figma",
//     url: "https://www.figma.com/file/K1uGsN6EQHTiMN2wlCfmmB/Chromatic-Testing?node-id=4%3A20&t=US2BdAT8jDTJktpF-1",
//   },
// };

MessagesTest.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const clickButton = canvas.getByText('Send Message')
  await userEvent.click(clickButton);
};