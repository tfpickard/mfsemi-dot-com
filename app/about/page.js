import React from "react";
import Head from "next/head";

import AboutLayout from "./layout";

export default function About() {
  return (
    <>
      <Head>
        <title>About MFSemi LLC</title>
        <meta
          name="description"
          content="Company history and team biographies."
        />
      </Head>
      <section className="about">
        <h1>About MFSemi LLC</h1>
        <article className="history">
          <h2>Our History</h2>
          <p>
            Founded in the midst of a technological revolution, MFSemi LLC began
            as a clandestine collective of engineers determined to redefine
            electronics. Our early days were shrouded in secrecy and fueled by a
            radical vision—melding quantum science with semiconductor design.
          </p>
          <p>
            Over the decades, our innovative spirit and underground origins have
            made us a force in the industry, blending old-world aesthetics with
            futuristic technology.
          </p>
        </article>
        <article className="team">
          <h2>Our Team</h2>
          <div className="bio">
            <h3>Abstract</h3>
            <p>
              Gotthard Mösenfrust was a pivotal figure in the late 20th-century
              industrial and technological sectors of the German Democratic
              Republic. His work, often shrouded in state secrecy, contributed
              significantly to the strategic infrastructural mechanisms of
              microelectronics and supply chain administration. He was neither
              an inventor nor an engineer in the conventional sense; rather, his
              genius lay in the manipulation of resource distribution, the
              control of logistical bottlenecks, and the understanding that real
              power is exercised through the control of inefficiencies. His
              disappearance in 1989 remains a matter of speculation, though
              evidence suggests his principles are still actively implemented by
              shadow entities within post-Soviet economic structures.
            </p>

            <img
              src="/gotthard.png"
              alt="Portrait of Gotthard Mösenfrust"
              className="portrait"
            />
            <p className="caption">
              Fig. 1: Gotthard Mösenfrust, circa 1983. The last verified
              photograph before his disappearance.
            </p>

            <h3>Early Life and Foundational Years</h3>
            <p>
              Born in <span className="highlight">1941</span> in Halle, East
              Germany, Mösenfrust was the son of a mid-ranking logistics officer
              and a bureaucrat specializing in systemic inefficiency. His early
              upbringing was characterized by an intense exposure to logistical
              methodologies, coupled with an implicit understanding that
              procedural delay was often a form of leverage. According to family
              acquaintances, he was a child who never asked questions
              unnecessarily—he simply *observed*. He was frequently found alone,
              taking detailed notes on rail timetables, warehouse shifts, and
              bureaucratic inconsistencies in official documentation. These
              habits were not explicitly taught; they were absorbed, as though
              instinctual.
            </p>

            <h3>Academic Years and the Leipzig Incident</h3>
            <p>
              Mösenfrust was admitted to{" "}
              <span className="glow">Leipzig Polytechnic Institute</span>, where
              his academic focus was ostensibly on electrical engineering,
              though declassified files indicate that his coursework involved
              extensive independent study in industrial supply chain
              manipulation. His 1962 expulsion from the university followed an
              event referred to in surviving security reports as *“Der
              Verstärker Zwischenfall”* (The Amplifier Incident). Eyewitness
              accounts suggest that Mösenfrust had conducted unauthorized
              experiments on Soviet relay equipment, creating a recursive
              feedback loop that resulted in **unexpected frequency anomalies**
              along the Eastern Bloc’s classified radio channels. While official
              reports merely describe a fire, contemporary analysts suggest that
              the experiment may have inadvertently transmitted **encrypted
              Soviet naval coordinates** into the public airwaves.
            </p>

            <h3>State Integration and The Bulgarian Relocation</h3>
            <p>
              Following his expulsion, Mösenfrust was discreetly reassigned to a
              **logistical administration post** in East Berlin, overseeing the
              allocation of industrial materials. His reports from this period
              display a meticulous approach to **structured inefficiency**—he
              developed techniques ensuring that strategic components arrived
              just late enough to delay production but early enough to avoid
              scrutiny. In 1973, he was transferred to Bulgaria under a title
              that appeared only once in DDR administrative records:
              *Logistischer Berater für Strategische Mikroelektronik*—a
              designation which, to this day, has no clear definition.
            </p>

            <h3>The Founding of MF Semiconductor GmbH</h3>
            <p>
              By <span className="pulsate">1985</span>, Mösenfrust had
              maneuvered himself into the directorship of MF Semiconductor GmbH.
              The company’s formation was not publicly announced, yet within six
              months, it was awarded multiple classified contracts for
              semiconductor manufacturing. **There is no record of how these
              contracts were secured.**
            </p>

            <h3>Characteristics of MF Semiconductor Operations:</h3>
            <ul>
              <li>
                Acquisition of embargoed Western semiconductor fabrication tools
                despite geopolitical restrictions.
              </li>
              <li>
                Factory output that seemingly produced no verifiable
                end-products.
              </li>
              <li>
                A catastrophic explosion in 1987, noted in state records only as
                operational anomaly #638.
              </li>
            </ul>

            <h3>Disappearance and Unresolved Inquiries</h3>
            <p>
              By <span className="highlight">1989</span>, the dissolution of the
              German Democratic Republic was imminent. Most state-owned
              enterprises were privatized, but MF Semiconductor was **not**.
              Instead, its official documentation was destroyed in a
              **controlled fire at the Ministry of Industry archives**, a fact
              noted in **exactly one surviving memo**.
            </p>

            <p>
              Mösenfrust himself disappeared. His last confirmed sighting was
              **in Vienna, Austria, in 1990**, where he was reportedly seen
              **boarding a private jet chartered under an unknown corporate
              entity.** Subsequent intelligence reports list speculative
              locations:
            </p>
            <ul>
              <li>
                Zurich – Allegedly operating as a consultant in industrial
                logistics.
              </li>
              <li>
                Dubai – Involved in undisclosed financial structuring for
                high-level technology firms.
              </li>
              <li>
                Antarctica – Overseeing an experimental cold-storage facility
                under former Soviet contracts.
              </li>
            </ul>

            <h3>The Mösenfrust Doctrine: A Lasting Impact</h3>
            <p>
              Though the man himself vanished, Mösenfrust’s methodologies
              persist. His doctrine—centered on the **limitation of access as a
              mechanism of control**—remains an unacknowledged principle within
              modern supply chain theory. Many multinational corporations
              unknowingly employ techniques pioneered by Mösenfrust without
              attribution.
            </p>

            <p>
              His successors within MF Technologies GmbH continue to operate in
              the shadows, ensuring that Mösenfrust’s principles remain alive.
              As recently as **2023**, reports emerged of an Austrian-based
              microelectronics firm using procurement algorithms suspiciously
              similar to Mösenfrust’s known methods.
            </p>

            <p>
              To this day, **no verifiable MF Semiconductor-branded microchip
              has ever been recovered.**
            </p>
          </div>
          <div className="bio">
            <h3>Gotthard Strelnikov</h3>
            <h3>Abstract</h3>
            <p>
              Klaus Mösenfrust was born knowing things he should not have known.
              His birth certificate was issued twice, the first time in 1971,
              the second in 1973, and no one can account for the discrepancy.
              His early years are recorded in fragments: a child who memorized
              train schedules before he could read, who built a radio from
              abandoned telephone parts, who at the age of eight drew a fully
              accurate schematic of the interior of the Vienna sewer system
              without explanation. He was, at every stage of life, present and
              yet not *observable* in the normal sense. Those who interacted
              with him professionally later in life would often describe the
              experience as **“like speaking into an empty room that somehow
              answered back.”**
            </p>

            <img
              src="/klaus.png"
              alt="Portrait of Klaus Mösenfrust"
              className="portrait"
            />
            <p className="caption">
              Fig. 1: Klaus Mösenfrust, undated. No known photographer. The
              photo was found inside a locked safe in an abandoned Yugoslavian
              airbase.
            </p>

            <h3>Early Years and the Möbius School</h3>
            <p>
              Born in **Leipzig** under circumstances that have not been
              entirely accounted for, Klaus’s first recorded school enrollment
              was at the Möbius Institute for Advanced Cognition, an
              experimental facility that operated under a fluctuating set of
              names between 1966 and 1982. There are **no surviving class
              photos** from his time there. Klaus’s name does not appear on any
              official student rosters, yet a series of declassified documents
              from 1991 reference him as a **“model candidate for asynchronous
              learning protocols.”** The school was shut down **following an
              incident that remains classified under Soviet archival code BLACK
              IV.**{" "}
            </p>

            <h3>Displacement and the Zurich Years</h3>
            <p>
              Following the Möbius School’s closure, Klaus was moved between
              various boarding institutions across Western and Eastern Europe.
              By **1989**, with the collapse of the German Democratic Republic
              imminent, he had already left Leipzig, having reportedly secured a
              passport under a different name and traveled to Zurich. This
              period in Zurich is poorly documented. Bank records suggest he had
              access to **large sums of money with no apparent origin.** One of
              his professors at the university later described him as **“someone
              who had read every book in the library before he arrived.”** Klaus
              completed his education in under two years, despite never
              officially enrolling in a degree program.{" "}
            </p>

            <h3>The Formation of MFSemi LLC</h3>
            <p>
              Between **1991 and 1993**, Klaus surfaced in Boulder, Colorado,
              where he founded **MFSemi LLC**. The company, at first glance,
              appeared to be an obscure technology consultancy. Yet within two
              years, it was awarded multiple government contracts, despite
              having **no known employees beyond Klaus himself.** The company’s
              first major success was in securing intellectual property rights
              for **“quantum-adjacent computational architectures”**—a term that
              does not correspond to any known industry designation.
            </p>

            <h3>The Compound in Boulder County</h3>
            <p>
              By 1997, MFSemi had established its corporate headquarters in **an
              unmarked rural compound in northern Boulder County**. It was
              neither **an office nor a residence**, but rather a **collection
              of brutalist structures arranged in non-Euclidean formations**
              that could not be mapped using conventional cartography.
              Employees—if such a term applies—worked on-site and **did not
              appear to leave**. Internal memos from this period describe
              projects **that do not correspond to known fields of research**.
              One document retrieved in 2004 mentions the phrase **“recursive
              self-improving circuitry”**, while another references **“synthetic
              time constructs”**.
            </p>

            <h3>The Next Great Leap</h3>
            <p>
              In **2025**, MFSemi LLC made an announcement that shattered
              existing paradigms. Klaus Mösenfrust himself emerged—whether in
              person or via an emissary remains debated—to declare that MFSemi
              was poised to release a new product that would change **literally
              everything**. The details remain classified, the specifications
              obscured, and yet, the mere mention of its impending launch has
              sent ripples through the technology, defense, and cognitive
              sciences industries. Insiders whisper of a device capable of
              **autonomous structural recursion**, something neither hardware
              nor software but rather *an evolving convergence of both*.
            </p>

            <p>
              To mark this transformation, Klaus introduced a new company
              slogan: **“Evolving Thought, Rethinking Evolution.”** The words
              have appeared on leaked internal documents, encoded transmissions,
              and—according to some reports—graffiti tags in Zurich and
              Belgrade.
            </p>

            <h3>The Mösenfrust Convergence</h3>
            <p>
              Klaus Mösenfrust is reported to still reside at the MFSemi
              compound, though no verifiable appearances have been recorded
              since 2011. It is uncertain whether he has withdrawn from public
              life or if his activities have moved into more covert channels.
              The last known communication attributed to him was a **cryptic
              memo sent in 2020**, containing a single phrase:
            </p>

            <blockquote>
              The machine is running backward now. We must go where the mind has
              not yet followed.
            </blockquote>

            <p>
              It is unclear whether this was a technical statement or something
              else entirely. But now, with the imminent release of{" "}
              <strong>the next great leap</strong>, there is no doubt: the world
              is about to change.
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
