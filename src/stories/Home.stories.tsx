
 

import React from 'react';
import { within, fireEvent, userEvent, screen } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Home from '../components/Home';
import type { Meta, StoryFn } from "@storybook/react";

import "./global-test.css";
import * as CONSTANTS from '../constants';

export default {
  title: 'Tests/Home',
  component: Home,
} as Meta;

const Template: StoryFn = (args) => <Home {...args} />;

export const HomeTest = Template.bind({});

// CasesTest.parameters = {
//   design: {
//     type: "figma",
//     url: "https://www.figma.com/file/K1uGsN6EQHTiMN2wlCfmmB/Chromatic-Testing?node-id=4%3A20&t=US2BdAT8jDTJktpF-1",
//   },
// };

HomeTest.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

};