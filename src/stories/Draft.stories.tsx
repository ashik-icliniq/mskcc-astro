
 

import React from 'react';
import { within, fireEvent, userEvent, screen } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Draft from '../components/Home/Draft';
import type { Meta, StoryFn } from "@storybook/react";

import "./global-test.css";
import * as CONSTANTS from '../constants';

export default {
  title: 'Tests/Home',
  component: Draft,
} as Meta;

const Template: StoryFn = (args) => <Draft {...args} />;

export const DraftTest = Template.bind({});

// CasesTest.parameters = {
//   design: {
//     type: "figma",
//     url: "https://www.figma.com/file/K1uGsN6EQHTiMN2wlCfmmB/Chromatic-Testing?node-id=4%3A20&t=US2BdAT8jDTJktpF-1",
//   },
// };

DraftTest.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const clickButton = canvas.getByText('Resume')
  await userEvent.click(clickButton);
};