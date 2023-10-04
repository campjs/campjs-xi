import * as React from "react";
import Layout from "../components/layout";
import Heading from "../components/heading";

const paragraphStyles = {
  marginBottom: 48,
};
const middleParagraphStyles = {
  marginBottom: 24,
};

const Page = ({ location }) => {
  return (
    <Layout location={location}>
      <Heading>🏕 COVID-19 information</Heading>

      <p style={paragraphStyles}>
        CampJS is an in-person event being held in a period where COVID-19 is
        still in the community. As this event involves staying on site,
        primarily in shared accomodation, there is a risk of COVID-19
        transmission. This page is prepread to help you decide if attending
        CampJS in person meets your risk tolerance.
      </p>

      <h2 style={middleParagraphStyles}>Key terms used in this document</h2>

      <p style={paragraphStyles}>
        <ul>
          <li>
            <strong>Commitment</strong> is something that we are promising to
            you.
          </li>
          <li>
            <strong>⚠️ Requirement</strong> is something that you will need to do
            in order to attend the event. Requirements form part of the
            conditions of sale of your ticket. Attendees who break these
            requirements may be asked to leave the event without a refund.
          </li>
          <li>
            <strong>💡 Recommendation</strong> is something that we won’t enforce,
            but we strongly suggest you do.
          </li>
          <li>
            <strong>Attendees</strong> include the organisers, volunteers,
            speakers, sponsor representatives, regular ticket holders (paid or
            unpaid), and anyone else present on site (except venue staff and
            subcontractors).
          </li>
        </ul>
      </p>

      <h2 style={middleParagraphStyles}>Mask wearing</h2>

      <p style={middleParagraphStyles}>
        As this is a shared accomodation event, the periods where masks can't
        practically be worn (e.g. sleeping, showering, eating) are such that a
        mask requirement is not in place.
      </p>

      <p style={middleParagraphStyles}>
        <strong>💡 Recommendation</strong> masks are worn in all indoor spaces.
        We'll have a supply of disposable masks available for attendees who
        choose to wear them but don't have their own.
      </p>

      <h2 style={middleParagraphStyles}>Vaccination and testing</h2>
      <p style={middleParagraphStyles}>
        <strong>💡 Recommendation</strong> We encourage all non-exempt participants
        to be up-to-date with COVID-19 vaccines, as it is the best way to reduce
        the impact of COVID-19 should you be infected during your time
        travelling to and attending the conference.
      </p>
      <p style={paragraphStyles}>
        <strong>💡 Recommendation</strong> We strongly recommend that attendees
        perform a rapid antigen test (RAT) before attending the event,
        especially if you are aware you have recently been exposed to COVID-19,
        or if you have recently been unmasked in a group setting.
      </p>

      <h2 style={middleParagraphStyles}>Ventilation and density</h2>

      <p style={middleParagraphStyles}>
        There will be outdoor space available at the venue where it will be
        possible to eat and drink. The weather during November in Springbrook is
        typically warm and sunny, with an average of 8 days of rain throughout
        the month and highs of 23°C.
      </p>

      <p style={paragraphStyles}>
        <strong>⚠️ Requirement</strong> You must respect your fellow attendees’
        boundaries if they ask that physical distancing be maintained.
      </p>

      <h2 style={middleParagraphStyles}>
        Displaying symptoms or testing positive
      </h2>

      <p style={middleParagraphStyles}>
        <strong>⚠️ Requirement</strong> We require you to not attend the
        conference if your presence would create a risk of exposure to
        communicable diseases (such as COVID-19) to your fellow attendees. Risk
        factors include:
        <ul>
          <li>
            Experiencing known COVID-19 or flu-like symptoms, in ways that are
            unusual to you
          </li>
          <li>
            Testing positive to COVID-19 during the conference, or before the
            conference without subsequently testing negative (for example, by 2
            non-positive rapid antigen tests taken 48 hours apart, or a negative
            PCR test)
          </li>
          <li>
            Experiencing extended close contact with someone who has tested
            positive to COVID-19, influenza, or other communicable respiratory
            infections
          </li>
        </ul>
      </p>

      <p style={middleParagraphStyles}>
        <strong>⚠️ Requirement</strong> If you test positive, or you’re displaying
        symptoms of COVID-19 in ways that are unusual to you, you may not attend
        the event in person.
      </p>

      <p style={middleParagraphStyles}>
        <strong>Commitment</strong> We’ll have a supply of Rapid Antigen Tests
        (RATs) available on site.
      </p>

      <p style={paragraphStyles}>
        <strong>Commitment</strong> If you test positive, or you’re displaying
        symptoms of COVID-19 we'll help you isolate or leave the event safely.
      </p>

      <h2 style={middleParagraphStyles}>Changes to this information</h2>

      <p style={paragraphStyles}>
        <strong>Commitment</strong>: All of the commitments from us, and
        requirements we expect from you and your fellow attendees, will only be
        changed if it is to increase protections. The exception to this is if
        circumstances outside our control require us to loosen protections. If
        this happens, we’ll let all ticket-holders know.
      </p>

      <h2 style={middleParagraphStyles}>Acknowledgements</h2>

      <p style={paragraphStyles}>
        The organisers acknowledge the work put in by
        <a href="https://2023.northbaypython.org/health-and-safety-policy">
          North Bay Python 2023
        </a>
        and <a href="https://2023.pycon.org.au/safety/covid/">PyCon AU 2023</a>,
        both of which were used as references when preparing this document.
      </p>
    </Layout>
  );
};

export default Page;
