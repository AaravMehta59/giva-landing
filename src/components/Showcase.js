import Link from "next/link";
import Image from "next/image";

import botOnlineStatus from "../utils/images/botStatus.svg";

const Showcase = () => {
  return (
    <>
      <main className="showcase">
        <h1 className="showcase-header h-color">Giva Bot</h1>
        <h2 className="showcase-header-text h-color">
          The only discord bot you need!
        </h2>
        <p className="showcase-para p-color">
          Multi-purpose discord bot with 150+ commands, 24/7 uptime, and a lot of features!
        </p>
        <Image
          src={botOnlineStatus}
          width={40}
          height={40}
          alt="online-status"
          className="onlineStatus"
        />{" "}
        <span className="p-color">Bot is online!</span>
        <div className="showcase-btn">
          <button className="btn">
            <Link className="h-color no-decoration" href="https://dsc.gg/invite-givabot">
              Invite now!
            </Link>
          </button>

          <button className="btn">
            <Link className="h-color no-decoration" href="https://discord.gg/X7VTsN7G64">
              Join server!
            </Link>
          </button>
        </div>
      </main>
    </>
  );
};

export default Showcase;
