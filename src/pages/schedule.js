import React from 'react';
import SEO from 'component/seo';
import { Stylings } from 'component/providers';
import { Footer, Header } from 'component/navigation';
import { Block, Section } from 'component/section';
import { FeatureText } from 'component/text';
import { ScheduleTable } from 'component/table';

import schedule from 'asset/data/schedule.json';

const SchedulePage = () => {
  return (
    <Stylings>
      <SEO title="Schedule" />
      <Section isGrid isAlt renderPreblock={() => <Header />}>
        <Block w={[12, 8, 8, 8]} c={[1, 3, 3, 3]}>
          <FeatureText mb="600" tin="up">
            Schedule
          </FeatureText>
        </Block>
      </Section>

      <Section isGrid>
        <Block w={12}>
          <ScheduleTable schedule={schedule} />
        </Block>
      </Section>

      <Footer />
    </Stylings>
  );
};

export default SchedulePage;
