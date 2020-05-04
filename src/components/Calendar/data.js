const slideData = [
  {
    month: null,
    day: null,
    viewers: null,
    body: null
  },
  {
    month: "Mar",
    day: 29,
    viewers: "15,895",
    body: `
      <p>
        <a href="https://www.worldometers.info/coronavirus/country/us/" target="_blank">497</a> Americans die of COVID-19, and Trump brags the White House press briefings are a <a href="https://twitter.com/realDonaldTrump/status/1244320570315018240" target="_blank">"ratings hit",</a> with <a href="https://www.adweek.com/tvnewser/sunday-march-29-scoreboard-cnn-was-tops-in-prime-time-among-adults-25-54/435523/" target="_blank">7.9mm</a> people tuning in.
      </p>
        `,
      videoID: 5
   },
   {
    month: "Mar",
    day: 30,
    viewers: "11,908",
    body: `
      <p>
        <a href="https://www.worldometers.info/coronavirus/country/us/" target="_blank">697</a> Americans die of COVID-19, and <a href="https://www.adweek.com/tvnewser/monday-march-30-scoreboard-tucker-carlson-kicked-off-the-week-with-the-no-1-show/435722/" target="_blank">8.3mm</a> people watch a 
         White House press briefing with actual special guest, <a href="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2561,x_0,y_0/dpr_1.5/c_limit,w_908/fl_lossy,q_auto/v1491846599/articles/2017/01/03/customers-pro-trump-pillows-are-a-nightmare/170102-weill-mypillow-tease_gc9cew" target="_blank">the MyPillow guy</a>.
      </p>
      `,
      videoID: 3
   },
   {
    month: "Mar",
    day: 31,
    viewers: "8,990",
    body: `
      <p>
        <a href="https://www.worldometers.info/coronavirus/country/us/" target="_blank">1079</a> Americans die of COVID-19 on the last day of March, and <a href="https://www.adweek.com/tvnewser/tuesday-march-31-scoreboard-for-the-second-consecutive-night-tucker-carlson-was-no-1-on-cable-news/435853/" target="_blank">9.7mm</a> people tune into the White House press briefing.
      </p>
      `,
      videoID: 1
   },
  {
    month: "Apr",
    day: 1,
    viewers: "7,767",
    body: `
      <p>
        <a href="https://www.worldometers.info/coronavirus/country/us/" target="_blank">1236</a> Americans die of COVID-19 as <a href="https://www.adweek.com/tvnewser/wednesday-april-1-scoreboard-tucker-carlson-finished-no-1-overall-in-prime-time-chris-cuomo-earns-rare-9-p-m-win-among-adults-25-54/436004/" target="_blank">9.6mm</a> people watch Trump brag that he’s <a href="https://www.youtube.com/watch?v=eMzZ1lsNt_I" target="_blank">"number one on Facebook"</a> at the White House press briefing.
      </p>
      `,
      videoID: 6
   },
   {
    month: "Apr",
    day: 2,
    viewers: "8,085",
    body: `
      <p>
        <a href="https://www.worldometers.info/coronavirus/country/us/" target="_blank">1175</a> Americans die of COVID-19 as the White House press briefing draws an audience of <a href="https://www.adweek.com/tvnewser/thursday-april-2-scoreboard-hannity-delivered-nearly-5-million-total-viewers/436181/" target="_blank">9.5mm</a> people.
      </p>
      `,
      videoID: 4
   },
  {
    month: "Apr",
    day: 3,
    viewers: "7,484",
    body: `
      <p>
        <a href="https://www.worldometers.info/coronavirus/country/us/" target="_blank">1256</a> more Americans die of COVID-19 as <a href="https://www.adweek.com/tvnewser/friday-april-3-scoreboard-tucker-carlson-led-fox-news-to-a-prime-time-win-cnn-was-no-1-at-9-10-and-11-p-m-in-demo/436345/" target="_blank">9.4mm</a> people watch the White House press briefing.
      </p>
      `,
      videoID: 2
   },
  {
    month: "Apr",
    day: 4,
    viewers: "4,880",
    body: `
      <p>
        <a href="https://www.worldometers.info/coronavirus/country/us/" target="_blank">1537</a> Americans die of COVID-19 and <a href="https://www.adweek.com/tvnewser/saturday-april-4-scoreboard-cnn-was-no-1-in-prime-time-among-adults-25-54-fox-news-no-1-in-total-viewers/436364/" target="_blank">7.5mm</a> people watch a White House press briefing where Trump peddles the drug Hydroxychloroquine.
      </p>
      `,
      videoID: 5
   },
  {
    month: "Apr",
    day: 5,
    viewers: "6,424",
    body: `
      <p>
        <a href="https://www.worldometers.info/coronavirus/country/us/" target="_blank">1401</a> Americans die of the <a href="https://twitter.com/realDonaldTrump/status/1246884203419099137?s=20" target="_blank">"tough and smart" "Invisible Enemy"</a> and <a href="https://www.adweek.com/tvnewser/sunday-april-5-scoreboard-fox-news-and-cnn-both-aired-specials-at-9-p-m-with-fnc-winning-total-viewers-and-cnn-no-1-in-demo/436366/" target="_blank">9mm</a> people tune into the White House press briefing.
      </p>
      `,
      videoID: 1
   },
  {
    month: "Apr",
    day: 6,
    viewers: "6,952",
    body: `
      <p>
        <a href="https://www.worldometers.info/coronavirus/country/us/" target="_blank">1496</a> Americans die of COVID-19 as <a href="https://www.adweek.com/tvnewser/monday-april-6-scoreboard-tucker-carlson-was-no-1-for-the-night-sean-hannity-and-chris-cuomo-split-9-p-m-hour/436530/" target="_blank">10.4mm</a> people watch the White House press briefing.
      </p>
      `,
      videoID: 6
   },
  {
    month: "Apr",
    day: 7,
    viewers: "4,236",
    body: `
      <p>
        American COVID-19 deaths spike to <a href="https://www.worldometers.info/coronavirus/country/us/" target="_blank">2219</a> in one day as <a href="https://www.adweek.com/tvnewser/tuesday-april-7-scoreboard-an-interview-with-president-trump-gives-hannity-a-tuesday-ratings-win/436657/" target="_blank">9.4mm</a> people tune into the White House press briefing.
      </p>
      `,
      videoID: 4
   },
  {
    month: "Apr",
    day: 8,
    viewers: "4,314",
    body: `
      <p>
        <a href="https://www.worldometers.info/coronavirus/country/us/" target="_blank">2156</a> Americans die of COVID-19 on the same day Trump <a href="https://twitter.com/realDonaldTrump/status/1247897589996908545?s=20" target="_blank">brags</a> <a href="https://twitter.com/realDonaldTrump/status/1247897591611682818?s=20" target="_blank">on Twitter</a> about the <a href="https://www.adweek.com/tvnewser/wednesday-april-8-scoreboard-tucker-carlson-returned-to-no-1-total-viewers-and-adults-25-54-during-prime-time/436805/" target="_blank">9.3mm</a> people watching the White House press briefing.
      </p>
      `,
      videoID: 2
   },
  {
    month: "Apr",
    day: 9,
    viewers: "4,141",
    body: `
      <p>
        <a href="https://www.worldometers.info/coronavirus/country/us/" target="_blank">2101</a> Americans die of COVID-19 and <a href="https://www.adweek.com/tvnewser/thursday-april-9-scoreboard-outside-of-the-task-force-briefing-the-five-was-no-1-show-on-cable-news/436929/" target="_blank">8.7mm</a> people watch the White House press briefing as Trump again <a href="https://twitter.com/realDonaldTrump/status/1248333612212195328?s=20" target="_blank">brags about his ratings</a> on Twitter.
      </p>
      `,
      videoID: 3
   },
  {
    month: "Apr",
    day: 10,
    viewers: "3,100",
    body: `
      <p>
        <a href="https://www.worldometers.info/coronavirus/country/us/" target="_blank">2226</a> Americans die of COVID-19 and <a href="https://www.adweek.com/tvnewser/friday-april-10-scoreboard-tucker-carlson-dominated-8-p-m-led-fox-news-to-a-prime-time-win-cnn-and-msnbc-earned-demo-wins-at-9-10-p-m/437169/" target="_blank">6.9mm</a> people watch the White House press briefing as Trump takes to Twitter to <a href="https://twitter.com/realDonaldTrump/status/1248620923248205824?s=20" target="_blank">defend his ratings</a> on the deadliest day so far.
      </p>
      `,
      videoID: 1
   },
  {
    month: "Apr",
    day: 11,
    viewers: "0",
    body: `
      <p>
        <a href="https://www.worldometers.info/coronavirus/country/us/" target="_blank">2013</a> Americans die of COVID-19. There is no White House press briefing.
      </p>
      `,
      videoID: 5
   },
  {
    month: "Apr",
    day: 12,
    viewers: "0",
    body: `
      <p>
        <a href="https://www.worldometers.info/coronavirus/country/us/" target="_blank">1715</a> Americans die of COVID-19 on Easter Sunday. There is no White House press briefing.
      </p>
      `,
      videoID: 6
   },
  {
    month: "Apr",
    day: 13,
    viewers: "6,126",
    body: `
      <p>
        <a href="https://www.worldometers.info/coronavirus/country/us/" target="_blank">1714</a> Americans die of COVID-19 and <a href="https://www.adweek.com/tvnewser/monday-april-13-scoreboard-viewers-flocked-to-fox-news-for-coverage-of-pres-trumps-daily-press-briefing-a-surreal-affair/437414/" target="_blank">10.5mm</a> people tune into the White House press briefing.
      </p>
      `,
      videoID: 3
   },
  {
    month: "Apr",
    day: 14,
    viewers: "3,799",
    body: `
      <p>
        <a href="https://www.worldometers.info/coronavirus/country/us/" target="_blank">2553</a> more Americans die as the <a href="https://www.cnn.com/2020/04/15/health/us-coronavirus-deaths-trends-wednesday/index.html" target="_blank">CDC adds probable COVID-19 deaths to their daily figures</a>, and <a href="https://www.adweek.com/tvnewser/tuesday-april-14-scoreboard-fox-news-won-the-key-measurements-each-hour-from-5-11-p-m/437529/" target="_blank">9.7mm</a> people watch the White House press briefing.
      </p>
      `,
      videoID: 4
   },
  {
    month: "Apr",
    day: 15,
    viewers: "3,667",
    body: `
      <p>
        <a href="https://www.worldometers.info/coronavirus/country/us/" target="_blank">2618</a> Americans die of COVID-19 as the White House press briefing draws an audience of <a href="https://www.adweek.com/tvnewser/wednesday-april-15-scoreboard-tucker-carlson-was-no-1-in-prime-time-with-4-7-million-total-viewers/437616/" target="_blank">9.6mm</a>.
      </p>
      `,
      videoID: 1
   },
  {
    month: "Apr",
    day: 16,
    viewers: "4,779",
    body: `
      <p>
        <a href="https://www.worldometers.info/coronavirus/country/us/" target="_blank">2176</a> Americans die of COVID-19 and <a href="https://www.adweek.com/tvnewser/thursday-april-16-scoreboard-fox-news-coverage-of-the-coronavirus-task-force-briefing-averaged-6-4-million-viewers-in-the-6-p-m-hour/437690/" target="_blank">10.4mm</a> people tune into the White House press briefing.
      </p>
      `,
      videoID: 6
   },
  {
    month: "Apr",
    day: 17,
    viewers: "3,504",
    body: `
      <p>
        <a href="https://www.worldometers.info/coronavirus/country/us/" target="_blank">2528</a> Americans die of COVID-19 and <a href="https://www.adweek.com/tvnewser/friday-april-17-scoreboard-tucker-carlson-was-no-1-in-prime-time-averaging-4-8-million-viewers/437788/" target="_blank">8.8mm</a> watch the White House press briefing as Trump encourages <a href="https://twitter.com/realDonaldTrump/status/1251168994066944003?s=20" target="_blank">dangerous</a> <a href="https://twitter.com/realDonaldTrump/status/1251169217531056130?s=20" target="_blank">ill-advised</a> <a href="https://twitter.com/realDonaldTrump/status/1251169987110330372?s=20" target="_blank">protests</a> on Twitter.
      </p>
      `,
      videoID: 2
   },
  {
    month: "Apr",
    day: 18,
    viewers: "2,995",
    body: `
      <p>
        <a href="https://www.worldometers.info/coronavirus/country/us/" target="_blank">1867</a> more Americans die of COVID-19 as <a href="https://www.adweek.com/tvnewser/saturday-april-18-scoreboard-jesse-watters-was-most-watched-while-greg-gutfeld-was-no-1-in-adults-25-54/437806/" target="_blank">5.6mm</a> watch the White House press briefing.
      </p>
      `,
      videoID: 3
   },
  {
    month: "Apr",
    day: 19,
    viewers: "4,661",
    body: `
      <p>
        <a href="https://www.worldometers.info/coronavirus/country/us/" target="_blank">1561</a> Americans die of COVID-19 and total US deaths top 40,000 as <a href="https://www.adweek.com/tvnewser/sunday-april-19-scoreboard-fox-news-remained-no-1-for-covid-19-briefing-coverage-and-cnn-was-no-1-in-the-prime-time-demo/437808/" target="_blank">7.2mm</a> watch the White House press briefing.
      </p>
      `,
      videoID: 5
   },
  {
    month: "Apr",
    day: 20,
    viewers: "4,285",
    body: `
      <p>
        <a href="https://www.worldometers.info/coronavirus/country/us/" target="_blank">1939</a> Americans die of COVID-19, <a href="https://www.adweek.com/tvnewser/monday-april-20-scoreboard/437946/" target="_blank">8.3mm</a> tune into the White House press briefing, and Trump again <a href="https://twitter.com/realDonaldTrump/status/1252552057170649088?s=20" target="_blank">tweets about his ratings</a>.
      </p>
      `,
      videoID: 4
   },
  {
    month: "Apr",
    day: 21,
    viewers: "3,142",
    body: `
      <p>
        <a href="https://www.worldometers.info/coronavirus/country/us/" target="_blank">2804</a> Americans die of COVID-19 – the highest single day total yet – as <a href="https://www.adweek.com/tvnewser/tuesday-april-21-scoreboard-tucker-carlson-remained-no-1-in-prime-time-bret-baier-hosted-his-show-from-white-house/438147/" target="_blank">8.8mm</a> watch the White House press briefing.
      </p>
      `,
      videoID: 1
   },
  {
    month: "Apr",
    day: 22,
    viewers: "3,674",
    body: `
      <p>
        <a href="https://www.worldometers.info/coronavirus/country/us/" target="_blank">2341</a> Americans die of COVID-19 as <a href="https://www.adweek.com/tvnewser/wednesday-april-22-scoreboard-tucker-carlson-hannity-ingraham-won-their-respective-timeslots-in-total-viewers-and-a25-54/438361/" target="_blank">8.6mm</a> watch Trump’s press conference.
      </p>
      `,
      videoID: 2
   },
   {
    month: "Apr",
    day: 23,
    viewers: "3,821",
    body: `
      <p>
        <a href="https://www.worldometers.info/coronavirus/country/us/" target="_blank">2342</a> Americans die of COVID-19 and US deaths top 50k as <a href="https://www.adweek.com/tvnewser/thursday-april-23-scoreboard-tucker-carlson-sean-hannity-win-their-time-slots-in-total-viewers-and-24-54-demo/438457/" target="_blank">8.9mm</a> watch Trump suggest people ingest disinfectant.
      </p>
      `,
      videoID: 6
   },
  {
    month: "Apr",
    day: 24,
    viewers: "4,292",
    body: `
      <p>
        <a href="https://www.worldometers.info/coronavirus/country/us/" target="_blank">1957</a> Americans die of COVID-19 as <a href="https://www.adweek.com/tvnewser/thursday-april-23-scoreboard-tucker-carlson-sean-hannity-win-their-time-slots-in-total-viewers-and-24-54-demo/438457/" target="_blank">8.4mm</a> watch Trump appear for 20 minutes and take no questions.
      </p>
      `,
      videoID: 3
   },
   {
    month: "Apr",
    day: 25,
    viewers: "0",
    body: `
      <p>
        <a href="https://www.worldometers.info/coronavirus/country/us/" target="_blank">2065</a> Americans die of COVID-19 and Trump cancels the white house briefing, reportedly <a href="https://www.huffpost.com/entry/trump-press-briefings-covid-19-disinfectant-injection_n_5ea4e8b6c5b6805f9ece36a1?guccounter=1" target="_blank">losing interest</a> in them. 
      </p>
      `,
      videoID: 1
   },
  {
    month: "Apr",
    day: 26,
    viewers: "0",
    body: `
      <p>
        <a href="https://www.worldometers.info/coronavirus/country/us/" target="_blank">1156</a> Americans die of COVID-19. There is no White House press briefing. 
      </p>
      `,
      videoID: 2
   },
  {
    month: "Apr",
    day: 27,
    viewers: "0",
    body: `
      <p>
        <a href="https://www.worldometers.info/coronavirus/country/us/" target="_blank">1384</a> more Americans die of COVID-19. There is no White House press briefing. 
      </p>
      `,
      videoID: 5
   },
  {
    month: "Apr",
    day: 28,
    viewers: "0",
    body: `
      <p>
        <a href="https://www.worldometers.info/coronavirus/country/us/" target="_blank">2470</a> Americans die of COVID-19 pushing US deaths over 60k. There is no White House press briefing. 
      </p>
      `,
      videoID: 6
   },
   {
    month: "Apr",
    day: 29,
    viewers: "0",
    body: `
      <p>
        <a href="https://www.worldometers.info/coronavirus/country/us/" target="_blank">2390</a> Americans die of COVID-19. Once again there is no White House press briefing. 
      </p>
      `,
      videoID: 4
   },
  {
    month: "Apr",
    day: 30,
    viewers: "0",
    body: `
      <p>
        <a href="https://www.worldometers.info/coronavirus/country/us/" target="_blank">2201</a> more Americans die of COVID-19. There is no acknowledgement or White House press briefing. 
      </p>
      `,
      videoID: 3
   },
  {
    month: "May",
    day: 1,
    viewers: "0",
    body: `
      <p>
        <a href="https://www.worldometers.info/coronavirus/country/us/" target="_blank">1897</a> Americans die of COVID-19. There is no White House press briefing. 
      </p>
      `,
      videoID: 1
   },
  {
    month: "May",
    day: 2,
    viewers: "0",
    body: `
      <p>
        <a href="https://www.worldometers.info/coronavirus/country/us/" target="_blank">1691</a> Americans die of COVID-19. Trump has not held a White House press briefing in over a week. 
      </p>
      `,
      videoID: 2
   },
]

export {
  slideData
}