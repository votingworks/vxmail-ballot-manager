import React from 'react'
import styled from 'styled-components'
import Markdown from '../components/Markdown'

const InsertPage = styled.div`
  width: 8.5in;
  height: 11in;
  @media screen {
    position: relative;
    box-shadow: 2px 3px 7px rgba(0,0,0,0.3);
    margin: 0.25in auto;
    background-color: #ffffff;
    font-size: 9pt;
  }
`
const InsertPageBlank = styled(InsertPage)`
  display: flex;
  align-items: center;
  justify-content: center;
`

const ToAddress = styled.div`
  font-size: 12pt;
  line-height: 1.2;
`
const FromAddress = styled.div`
  font-size: 10pt;
  line-height: 1.2;
`
const IMb = styled.div`
  font-size: 14pt;
  line-height: 1.2;
  font-family: USPSIMBCompact;
`

const OutboundWindow = styled.div`
  position: absolute;
  top: 1.425in;
  left: 1.375in;
  height: 2.5in;
  width: 4in;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.03in 0.05in;
  @media screen {
    &:hover {
      outline: 1px solid red;
    }
  }
`
// const OutboundSenderWindow = styled.div`
//   position: absolute;
//   top: 1.125in;
//   left: 1.375in;
//   height: 0.625in;
//   width: 2.4in;
//   // outline: 1pt solid tan;
//   display: flex;
//   align-items: center;
//   padding: 0.03in 0.05in;
// `
// const OutboundSenderAddress = styled.div`
//   font-size: 8pt;
//   line-height: 1.2;
// `

// const OutboundVoterWindow = styled.div`
//   position: absolute;
//   top: 2.75in;
//   left: 1.375in;
//   height: 0.75in;
//   width: 3in;
//   // outline: 1pt solid tan;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   padding: 0.03in 0.05in;
// `
// const OutboundVoterAddress = styled.div`
//   font-size: 8pt;
//   line-height: 1.2;
// `

const Instructions = styled.div`
  position: absolute;
  top: 4.5in;
  right: 0.5in;
  left: 1.375in;
  height: 6in;
  padding: 0 0.05in;
`

const InboundWindow = styled.div`
  position: absolute;
  top: 1.875in;
  left: 1.0625in;
  height: 2.75in;
  width: 4.125in;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen {
    &:hover {
      outline: 1px solid red;
    }
  }
`

const VoterInfo = styled.div``
const VoterSignature = styled.div`
  position: relative;
  border: 3pt solid black;
  border-radius: 0.1in;
  height: 0.925in;
  display: flex;
  align-items: flex-end;
`
const SignatureArrow = styled.div`
  position: absolute;
  top: 0;
  left: -0.875in;
  height: 0.875in;
  width: 0.875in;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16pt;
  text-align: left;
  font-weight: bold;
  &::after {
    content: '';
    width: 0;
    height: 0;
    border: 0.2in solid transparent;
    border-left-color: black;
    display: block;
    border-right-width: 0.1in;
  }
`
const SignatureLine = styled.div`
  position: relative;
  border-top: 1pt solid black;
  flex: 3;
  margin: 0.025in 0.05in;
  padding-top: 0.025in;
  font-size: 8pt;
  &::before {
    content: '✖️';
    position: absolute;
    top: -20pt;
    font-size: 20pt;
    left: -4pt;
  }
`
const DateLine = styled.div`
  border-top: 1pt solid black;
  flex: 1;
  margin: 0.025in 0.05in;
  padding-top: 0.025in;
  font-size: 8pt;
`
const VoterData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0.05in;
`
const VoterAddress = styled.div`
  flex: 1;
`
const VoterBarcode = styled.div`
  min-width: 1.25in;
  background: url('/inserts/code39barcode.svg') no-repeat;
  background-size: contain;
`
const InboundJurisdiction = styled.div`
  padding: 0.03in 0.05in;
`

const Declaration = styled.div`
  position: absolute;
  top: 0.25in;
  left: 1.0625in;
  right: 0.25in;
  max-height: 1.55in;
`
interface Props {
  voterId: string
  voterFirstName: string
  voterMiddleName: string
  voterLastName: string
  voterNameSuffix: string
  voterStreet1: string
  voterStreet2: string
  voterCity: string
  voterState: string
  voterZipCode: string
  voterBallotStyleId: string
  voterPrecinctId: string
  voterAddressIMb: string
  jurisdictionAddressName: string
  jurisdictionAddressStreet1: string
  jurisdictionAddressStreet2: string
  jurisdictionAddressCity: string
  jurisdictionAddressState: string
  jurisdictionAddressZipCode: string
  jurisdictionAddressIMb: string
  insertDeclarationMarkdown: string
  insertInstructionsMarkdown: string
}

const MailInserts = ({
  voterId,
  voterFirstName,
  voterMiddleName,
  voterLastName,
  voterNameSuffix,
  voterStreet1,
  voterStreet2,
  voterCity,
  voterState,
  voterZipCode,
  voterBallotStyleId,
  voterPrecinctId,
  voterAddressIMb,
  jurisdictionAddressName,
  jurisdictionAddressStreet1,
  jurisdictionAddressStreet2,
  jurisdictionAddressCity,
  jurisdictionAddressState,
  jurisdictionAddressZipCode,
  jurisdictionAddressIMb,
  insertDeclarationMarkdown,
  insertInstructionsMarkdown,
}: Props) => {

  const jurisdictionAddress = <React.Fragment>
    {jurisdictionAddressName}<br />
    {jurisdictionAddressStreet1}{jurisdictionAddressStreet2 && `, ${jurisdictionAddressStreet2}`}<br />
    {jurisdictionAddressCity.toUpperCase()} {jurisdictionAddressState.toUpperCase()} {jurisdictionAddressZipCode}
  </React.Fragment>

  const voterAddress = <React.Fragment>
    {voterFirstName} {voterMiddleName} {voterLastName}{voterNameSuffix && `, ${voterNameSuffix}`}<br />
    {voterStreet1}{voterStreet2 && `, ${voterStreet2}`}<br />
    {voterCity.toUpperCase()} {voterState.toUpperCase()} {voterZipCode}
  </React.Fragment>

  return (
    <React.Fragment>
      <InsertPage>
        <OutboundWindow>
          <FromAddress>
            {jurisdictionAddress}
          </FromAddress>
          <div>
            <IMb>{voterAddressIMb}</IMb>
            <ToAddress>
              {voterAddress}
            </ToAddress>
          </div>
        </OutboundWindow>
        {/* <OutboundSenderWindow>
          <OutboundSenderAddress>
            {jurisdictionAddress}
          </OutboundSenderAddress>
        </OutboundSenderWindow>
        <OutboundVoterWindow>
          <IMb>{voterAddressIMb}</IMb>
          <OutboundVoterAddress>
            {voterAddress}
          </OutboundVoterAddress>
        </OutboundVoterWindow> */}
        <Instructions>
          <Markdown maxWidth={false}>
            {insertInstructionsMarkdown}
          </Markdown>
        </Instructions>
      </InsertPage>

      <InsertPageBlank>
        <div>This page left blank intentionally.</div>
      </InsertPageBlank>

      <InsertPage>
        <Declaration>
          <Markdown maxWidth={false}>
            {insertDeclarationMarkdown}
          </Markdown>
        </Declaration>
        <InboundWindow>
          <VoterInfo>
            <VoterSignature>
              <SignatureArrow>
                Sign Here
                </SignatureArrow>
              <SignatureLine>
                Voter Signature <strong>(sign in ink)</strong>
              </SignatureLine>
              <DateLine>
                Date Signed
              </DateLine>
            </VoterSignature>
            <VoterData>
              <VoterAddress>
                <FromAddress>
                  {voterAddress}
                </FromAddress>
              </VoterAddress>
              <VoterBarcode>
                {/* { voterId } */}
              </VoterBarcode>
            </VoterData>
          </VoterInfo>
          <InboundJurisdiction>
            <IMb>{jurisdictionAddressIMb}</IMb>
            <ToAddress>
              {jurisdictionAddress}
            </ToAddress>
          </InboundJurisdiction>
        </InboundWindow>
      </InsertPage>

      <InsertPageBlank>
        <div>This page left blank intentionally.</div>
      </InsertPageBlank>
    </React.Fragment>
  )
}

export default MailInserts