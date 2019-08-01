/* @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import themeGet from '@styled-system/theme-get';
import {
  SubHeadingText,
  ScheduleRowTitle,
  ScheduleRowDesc,
  BodyText,
} from 'component/text';

const Table = styled.table`
  border-collapse: collapse;
  background: transparent;
  width: 100%;
`;

const THead = styled.thead`
  display: block;
`;
const Th = styled.th`
  display: block;
`;

const TBody = styled.tbody`
  @media (max-width: ${themeGet('breakpoints.0')}) {
    display: grid;
    grid-row-gap: ${themeGet('space.400')};
  }
`;
const Td = styled.td`
  border: none;
  border-bottom: solid 1px ${themeGet('colors.gray100')};
  padding: ${themeGet('space.500')} ${themeGet('space.400')};
  &:first-of-type {
    padding-left: 0 !important;
  }
  &:last-of-type {
    padding-right: 0 !important;
  }
  & > *:first-child {
    margin-top: 0 !important;
  }
  & > *:last-child {
    margin-bottom: 0 !important;
  }
  &:nth-child(3) {
    text-align: right;
  }

  @media (max-width: ${themeGet('breakpoints.0')}) {
    border-bottom: none !important;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    overflow-wrap: break-word;
    padding-left: 0 !important;
    padding-right: 0 !important;
    &:nth-child(1) {
      order: 1;
      padding-bottom: 0;
    }
    &:nth-child(2) {
      order: 3;
      grid-column: 2 span;
      padding-top: ${themeGet('space.400')};
    }
    &:nth-child(3) {
      order: 2;
      padding-bottom: 0;
      text-align: unset;
    }
  }
`;

const Tr = styled.tr`
  vertical-align: top;

  ${THead} & {
    display: block;
    position: absolute;
    top: -9999px;
    left: -9999px;
    border: none;
  }

  @media (max-width: ${themeGet('breakpoints.0')}) {
    ${TBody} & {
      padding-bottom: ${themeGet('space.300')};
      border-bottom: solid 1px ${themeGet('colors.gray100')};
      display: grid;
      grid-template-columns: 1fr;
      grid-column-gap: ${themeGet('space.500')};
    }
  }
`;

const DayTable = ({ title, rows }) => (
  <div>
    <SubHeadingText id={`day-${title}`}>{title}</SubHeadingText>
    <Table>
      <THead>
        <Tr>
          <Th>Time</Th>
          <Th>Details</Th>
          <Th>Location</Th>
        </Tr>
      </THead>

      <TBody>
        {rows.map(({ date, time, title, details, location }) => (
          <Tr key={time + title}>
            <Td>
              <ScheduleRowTitle>{time}</ScheduleRowTitle>
            </Td>
            <Td>
              <ScheduleRowTitle>{title}</ScheduleRowTitle>
              {details && <ScheduleRowDesc>{details}</ScheduleRowDesc>}
            </Td>
            <Td>
              <BodyText>{location}</BodyText>
            </Td>
          </Tr>
        ))}
      </TBody>
    </Table>
  </div>
);

export const ScheduleTable = ({ schedule }) => {
  const scheduleByDate = schedule.reduce((byDate, item) => {
    byDate[item.date] = byDate[item.date] || [];
    byDate[item.date].push(item);
    return byDate;
  }, {});

  return (
    <div
      css={theme => css`
        display: grid;
        grid-row-gap: ${themeGet('space.700')({ theme })};
      `}
    >
      {Object.keys(scheduleByDate).map(date => {
        return <DayTable key={date} title={date} rows={scheduleByDate[date]} />;
      })}
    </div>
  );
};
