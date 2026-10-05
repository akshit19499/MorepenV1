import { boardCommittees, boardOfDirectors, executiveLeaders, externalLinks, managementTeam } from "@morepen/shared";
import { useDialog } from "../../hooks/useDialog.js";
import { Eyebrow, ExtLink } from "../ui/index.js";
import { asset } from "../../lib/assets.js";

// Native <dialog> used for the board, management and committee lists.
function GovernanceDialog({ id, dialogRef, kicker, title, note, children }) {
  return (
    <dialog id={id} className="governance-dialog" ref={dialogRef}>
      <div className="governance-dialog-inner">
        <div className="governance-dialog-head">
          <div>
            <Eyebrow>{kicker}</Eyebrow>
            <h2>{title}</h2>
          </div>
          <button
            className="governance-dialog-close"
            type="button"
            aria-label="Close"
            onClick={(event) => event.currentTarget.closest("dialog").close()}
          >
            ×
          </button>
        </div>
        {children}
        <p className="small-note" style={{ marginTop: 22 }}>
          {note}
        </p>
      </div>
    </dialog>
  );
}

function GovernanceList({ people }) {
  return (
    <div className="governance-list">
      {people.map((person) => (
        <div className="governance-person" key={person.name}>
          <strong>{person.name}</strong>
          <span>{person.role}</span>
        </div>
      ))}
    </div>
  );
}

// Leadership section: executive leaders upfront, governance detail on demand.
export function CompanyLeadership() {
  const board = useDialog();
  const management = useDialog();
  const committees = useDialog();

  return (
    <>
      <section className="section leadership-v23" id="leadership">
        <div className="wrap">
          <div className="leadership-v23-layout">
            <div className="leadership-v23-heading">
              <Eyebrow>Leadership</Eyebrow>
              <h2>
                Continuity.
                <br />
                Accountability.
              </h2>
              <p>
                Executive leadership is presented upfront, while the wider Board, management team and committee structure
                remain available on demand through the governance links.
              </p>
            </div>
            <div className="leadership-v23-people">
              {executiveLeaders.map((leader) => (
                <article className="leadership-v23-person" key={leader.name}>
                  <div className="leadership-v23-photo">
                    <img src={asset(leader.photo)} alt={leader.name} loading="lazy" decoding="async" />
                  </div>
                  <div className="leadership-v23-info">
                    <h3>{leader.name}</h3>
                    <p>{leader.role}</p>
                  </div>
                </article>
              ))}
              <div className="leadership-v23-actions">
                <button className="btn outline" type="button" onClick={board.open}>
                  Board of Directors <span aria-hidden="true">→</span>
                </button>
                <button className="btn outline" type="button" onClick={management.open}>
                  Management team <span aria-hidden="true">→</span>
                </button>
                <button className="btn outline" type="button" onClick={committees.open}>
                  Board committees <span aria-hidden="true">→</span>
                </button>
                <ExtLink href={externalLinks.investors}>Governance disclosures</ExtLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <GovernanceDialog
        id="board-dialog"
        dialogRef={board.ref}
        kicker="Board of Directors"
        title="Board composition"
        note="Board composition should remain CMS-managed and carry an effective-date field in production."
      >
        <GovernanceList people={boardOfDirectors} />
      </GovernanceDialog>
      <GovernanceDialog
        id="management-dialog"
        dialogRef={management.ref}
        kicker="Management"
        title="Management team"
        note="Management titles should remain CMS-managed for future changes."
      >
        <GovernanceList people={managementTeam} />
      </GovernanceDialog>
      <GovernanceDialog
        id="committees-dialog"
        dialogRef={committees.ref}
        kicker="Corporate governance"
        title="Board committees"
        note="Committee composition shown from FY26 corporate-governance disclosures; production CMS should carry an effective-date and update workflow."
      >
        <div className="committee-stack">
          {boardCommittees.map((committee) => (
            <div className="committee-card" key={committee.name}>
              <h3>{committee.name}</h3>
              {committee.members.map((member) => (
                <p key={member}>{member}</p>
              ))}
            </div>
          ))}
        </div>
      </GovernanceDialog>
    </>
  );
}
