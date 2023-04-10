
 

import React from 'react';
import { within, fireEvent, userEvent, screen } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import SideNav from '../components/SideNav';
import "./global-test.css";
import * as CONSTANTS from '../constants';
import type { Meta, StoryFn } from "@storybook/react";


export default {
  title: 'Tests/SideNav',
  component: SideNav,
} as Meta;

const Template : StoryFn = (args) => <SideNav {...args} activeMenu='home' />;

export const SideNavTest = Template.bind({});

// CasesTest.parameters = {
//   design: {
//     type: "figma",
//     url: "https://www.figma.com/file/K1uGsN6EQHTiMN2wlCfmmB/Chromatic-Testing?node-id=4%3A20&t=US2BdAT8jDTJktpF-1",
//   },
// };

SideNavTest.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
};