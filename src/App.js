import "./App.css";
import { motion } from "framer-motion";
import {
  AccountCircleRounded,
  AssignmentTurnedInRounded,
  AttachMoneyRounded,
  BarChartRounded,
  ColorLensRounded,
  DashboardRounded,
  SettingsRemoteRounded,
  TocRounded
} from "@mui/icons-material";
import Item from "./component/Item";
import { useState } from "react";
function App() {
  const [open, setOpen] = useState(true);

  // for collpsing sidebar
  const handleToggle = () => {
    setOpen(!open);
  };

  const sideContainerVariants = {
    true: {
      width: "15rem",
    },
    false: {
      transition: {
        delay: 0.6,
      },
    },
  };

  const sidebarVariants = {
    true: {},
    false: {
      width: "3rem",
      transition: {
        delay: 0.4,
      },
    },
  };

  const profileVariants = {
    true: {
      alignSelf: "center",
      width: "4rem",
    },
    false: {
      alignSelf: "flex-start",
      marginTop: "2rem",
      width: "3rem",
    },
  };
  return (
    <div className="App">
      <motion.div
        data-Open={open}
        variants={sideContainerVariants}
        initial={`${open}`}
        animate={`${open}`}
        className="sidebar_container"
      >
        {/* sidebar div */}
        <motion.div
          className="sidebar"
          initial={`${open}`}
          animate={`${open}`}
          variants={sidebarVariants}
        >
          {/* lines_icon */}
          <motion.div
            whileHover={{
              scale: 1.2,
              rotate: 180,
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
              transition: {
                delay: 0.2,
                duration: 0.4,
              },
            }}
            onClick={handleToggle}
            className="lines_icon"
          >
            <TocRounded />
          </motion.div>
          {/* profile */}
          <motion.div
            layout
            initial={`${open}`}
            animate={`${open}`}
            variants={profileVariants}
            className="profile"
            transition={{ duration: 0.4 }}
            whileHover={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              backdropFilter: "blur(5.5px)",
              WebkitBackdropFilter: "blur(5.5px)",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
              cursor: "pointer",
            }}
          >
            <img
              src="https://sun6-21.userapi.com/s/v1/ig2/dtiZWuvdVaB3xamWWeSZKzcQbYkxqJSUGGIZXalS8-uWbuqIE-JzNH4MSCCRmoKJzStfVgvTAcHSSpNp-xBw5ViC.jpg?size=2021x2021&quality=96&crop=16,10,2021,2021&ava=1"
              alt="profile_img"
            />
          </motion.div>
          {/* groups */}
          <div className="groups">
            {/* group 1 */}
            <div className="group">
              <motion.h3
                animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
              >
                ANALYTICS
              </motion.h3>
              <Item icon={<DashboardRounded />} name="Dashboard" />
              <Item icon={<BarChartRounded />} name="Performance" />
            </div>
          </div>
          {/* group 2 */}
          <div className="group">
            <motion.h3
              animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
            >
              CONTENT
            </motion.h3>
            <Item icon={<AttachMoneyRounded />} name="Sales" />
            <Item icon={<AssignmentTurnedInRounded />} name="Checklist" />{" "}
            <Item icon={<AccountCircleRounded />} name="Customers" />
          </div>
          {/* group 3 */}
          <div className="group">
            <motion.h3
              animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
            >
              CUSTOMIZATION
            </motion.h3>
            <Item icon={<SettingsRemoteRounded />} name="Segments" />
            <Item icon={<ColorLensRounded />} name="Themems" />
          </div>
        </motion.div>
      </motion.div>

      <div className="body_container"></div>
    </div>
  );
}

export default App;
