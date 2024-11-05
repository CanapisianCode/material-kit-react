/* eslint-disable no-unused-vars */
import { useState, useEffect, useCallback, useMemo } from "react";
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
//import input from "assets/theme/components/form/input";

function LightWaveDashboard() {
  // const [state, setState] = useState({
  //   currentTime: new Date().toLocaleTimeString(),
  //   clockedIn: false,
  //   isTaskRunning: false,
  //   clockHistory: [],
  //   projectData:   projectTestData = [
  //     {
  //       id: 1,
  //       projectId: "P001",
  //       projectName: "Project A",
  //     },
  //     {
  //       id: 2,
  //       projectId: "P002",
  //       projectName: "Project B",
  //     },
  //     {
  //       id: 3,
  //       projectId: "P003",
  //       projectName: "Project C",
  //     },
  //     {
  //       id: 4,
  //       projectId: "P004",
  //       projectName: "Project D",
  //     },
  //     {
  //       id: 5,
  //       projectId: "P005",
  //       projectName: "Project E",
  //     },
  //     {
  //       id: 6,
  //       projectId: "P006",
  //       projectName: "Project F",
  //     },
  //     {
  //       id: 7,
  //       projectId: "P007",
  //       projectName: "Project G",
  //     },
  //     {
  //       id: 8,
  //       projectId: "P008",
  //       projectName: "Project H",
  //     },
  //     {
  //       id: 9,
  //       projectId: "P009",
  //       projectName: "Project I",
  //     },
  //     {
  //       id: 10,
  //       projectId: "P010",
  //       projectName: "Project J",
  //     },
  //     {
  //       id: 11,
  //       projectId: "P011",
  //       projectName: "Project K",
  //     },
  //     {
  //       id: 12,
  //       projectId: "P012",
  //       projectName: "Project L",
  //     },
  //     {
  //       id: 13,
  //       projectId: "P013",
  //       projectName: "Project M",
  //     },
  //     {
  //       id: 14,
  //       projectId: "P014",
  //       projectName: "Project N",
  //     },
  //     {
  //       id: 15,
  //       projectId: "P015",
  //       projectName: "Project O",
  //     },
  //     {
  //       id: 16,
  //       projectId: "P016",
  //       projectName: "Project P",
  //     },
  //     {
  //       id: 17,
  //       projectId: "P017",
  //       projectName: "Project Q",
  //     },
  //     {
  //       id: 18,
  //       projectId: "P018",
  //       projectName: "Project R",
  //     },
  //   ],

  //   {taskId: taskTestData = [
  //     {
  //       id: 1,
  //       taskId: 101,
  //       taskName: "Fiber splicing",
  //     },
  //     {
  //       id: 2,
  //       taskId: 102,
  //       taskName: "Troubleshooting",
  //     },
  //     {
  //       id: 3,
  //       taskId: 103,
  //       taskName: "Directional bore",
  //     },
  //     {
  //       id: 4,
  //       taskId: 104,
  //       taskName: "Trench",
  //     },
  //     {
  //       id: 5,
  //       taskId: 105,
  //       taskName: "Plow",
  //     },
  //     {
  //       id: 6,
  //       taskId: 106,
  //       taskName: "Push-pull",
  //     },
  //     {
  //       id: 7,
  //       taskId: 107,
  //       taskName: "Fiber blow",
  //     },
  //     {
  //       id: 8,
  //       taskId: 108,
  //       taskName: "Overlash",
  //     },
  //     {
  //       id: 9,
  //       taskId: 109,
  //       taskName: "Relash",
  //     },
  //     {
  //       id: 10,
  //       taskId: 110,
  //       taskName: "Delash",
  //     },
  //     {
  //       id: 11,
  //       taskId: 111,
  //       taskName: "Pole Transfer",
  //     },
  //     {
  //       id: 12,
  //       taskId: 112,
  //       taskName: "Set anchor",
  //     },
  //     {
  //       id: 13,
  //       taskId: 113,
  //       taskName: "Coax splice with activation",
  //     },
  //     {
  //       id: 14,
  //       taskId: 114,
  //       taskName: "OTDR Verification",
  //     },
  //     {
  //       id: 15,
  //       taskId: 115,
  //       taskName: "Mid Entry",
  //     },
  //     {
  //       id: 16,
  //       taskId: 116,
  //       taskName: "Install Cabinet",
  //     },
  //     {
  //       id: 17,
  //       taskId: 117,
  //       taskName: "Install PON Cabinet",
  //     },
  //     {
  //       id: 18,
  //       taskId: 118,
  //       taskName: "Troubleshoot",
  //     }],},
  // });

  const [state, setState] = useState({
    currentTime: new Date().toLocaleTimeString(),
    clockedIn: false,
    isTaskRunning: false,
    clockHistory: [],
    projectIdData: [
      {
        projectName: "South Milwaukee",
        projectType: "UG",
        projectId: "120001",
      },
      {
        projectName: "South Milwaukee",
        projectType: "AER",
        projectId: "11001",
      },
      {
        projectName: "South Milwaukee",
        projectType: "FDA",
        projectId: "001",
      },
      {
        projectName: "Cedar Rapids",
        projectType: "UG",
        projectId: "128710",
      },
      {
        projectName: "South Milwaukee",
        projectType: "AER",
        projectId: "11002",
      },
      {
        projectName: "South Milwaukee",
        projectType: "FDA",
        projectId: "002",
      },
      {
        projectName: "South Milwaukee",
        projectType: "UG",
        projectId: "120003",
      },
      {
        projectName: "Union Grove",
        projectType: "AER",
        projectId: "11003",
      },
      {
        projectName: "South Milwaukee",
        projectType: "FDA",
        projectId: "003",
      },
      {
        projectName: "South Milwaukee",
        projectType: "UG",
        projectId: "120004",
      },
      {
        projectName: "Cedar Rapids",
        projectType: "AER",
        projectId: "11004",
      },
      {
        projectName: "Union Grove",
        projectType: "FDA",
        projectId: "004",
      },
      {
        projectName: "South Milwaukee",
        projectType: "UG",
        projectId: "120005",
      },
      {
        projectName: "South Milwaukee",
        projectType: "AER",
        projectId: "11005",
      },
      {
        projectName: "South Milwaukee",
        projectType: "FDA",
        projectId: "005",
      },
      {
        projectName: "South Milwaukee",
        projectType: "UG",
        projectId: "120006",
      },
      {
        projectName: "South Milwaukee",
        projectType: "AER",
        projectId: "11006",
      },
      {
        projectName: "Cedar Rapids",
        projectType: "FDA",
        projectId: "006",
      },
    ],
    taskIdData: [
      {
        taskId: 101,
        taskName: "Fiber splicing",
      },
      {
        taskId: 102,
        taskName: "Troubleshooting",
      },
      {
        taskId: 103,
        taskName: "Directional bore",
      },
      {
        taskId: 104,
        taskName: "Trench",
      },
      {
        taskId: 105,
        taskName: "Plow",
      },
      {
        taskId: 106,
        taskName: "Push-pull",
      },
      {
        taskId: 107,
        taskName: "Fiber blow",
      },
      {
        taskId: 108,
        taskName: "Overlash",
      },
      {
        taskId: 109,
        taskName: "Relash",
      },
      {
        taskId: 110,
        taskName: "Delash",
      },
      {
        taskId: 111,
        taskName: "Pole Transfer",
      },
      {
        taskId: 112,
        taskName: "Set anchor",
      },
      {
        taskId: 113,
        taskName: "Coax splice with activation",
      },
      {
        taskId: 114,
        taskName: "OTDR Verification",
      },
      {
        taskId: 115,
        taskName: "Mid Entry",
      },
      {
        taskId: 116,
        taskName: "Install Cabinet",
      },
      {
        taskId: 117,
        taskName: "Install PON Cabinet",
      },
      {
        taskId: 118,
        taskName: "Troubleshoot",
      },
    ],
    notes: "",
    currentChoices: [],
    activeInput: "",
    projectIdInput: "",
    taskIdInput: "",
  });

  // eslint-disable-next-line no-unused-vars
  const {
    currentTime,
    clockedIn,
    isTaskRunning,
    currentChoices,
    projectIdInput,
    taskIdInput,
    activeInput,
  } = state;

  // useEffect hook that updates the current time every second
  useEffect(() => {
    // Start an interval to update the currentTime state property every second
    // The intervalId variable stores the ID of the interval
    const intervalId = setInterval(() => {
      // Update the state by creating a new state object
      setState((prevState) => ({
        // Spread operator to copy all properties from the previous state
        ...prevState,
        // Update the 'currentTime' property with the current time
        currentTime: new Date().toLocaleTimeString(),
      }));
    }, 1000);
    // Return a cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, []);
  // function to handle Clock In/Clock Out button click

  // function to handle Start Task button click
  const handleTaskSubmit = useCallback(() => {
    // Check if the user is clocked in and both projectId and taskId are not empty
    if (state.clockedIn && state.projectIdInput !== "" && state.taskIdInput !== "") {
      // Regular expression for validating the taskId
      const regex = /^[0-9\b]+$/;

      // Check if the taskId matches the regular expression pattern
      if (regex.test(state.taskIdInput)) {
        // If the task is currently running
        if (state.isTaskRunning) {
          // Update the state by creating a new state object
          setState((prevState) => ({
            // Spread operator to copy all properties from the previous state
            ...prevState,
            // Create a new array called "clockHistory" and assign it the following values
            clockHistory: [
              // Spread operator to copy all items from the previous clockHistory array
              ...prevState.clockHistory,
              {
                // Create a new property named "time" with the current local time as its value
                time: new Date().toLocaleTimeString(),
                // Action string indicating task end
                action: `End Task - ${state.taskIdInput} on Project - ${state.projectIdInput}`,
                taskIdInput: "",
              },
            ],
            // Resetting taskId

            // Setting task running status to false
            isTaskRunning: false,
          }));
        } else {
          // Update the state by creating a new state object
          setState((prevState) => ({
            ...prevState,
            clockHistory: [
              ...prevState.clockHistory,
              {
                time: new Date().toLocaleTimeString(),
                action: `Start Task - ${state.taskIdInput} on Project - ${state.projectIdInput}`,
              },
            ],
            isTaskRunning: true,
          }));
        }
      }
    }
    // Dependency array for the useCallback hook. Re-evaluates the callback function when any of these dependencies change
  }, [
    state.clockedIn,
    state.projectIdInput,
    state.taskIdInput,
    state.isTaskRunning,
    state.clockHistory,
  ]);

  const bgImageStyle = useMemo(
    () => ({
      backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
        `${linearGradient(
          rgba(gradients.dark.main, 0.6),
          rgba(gradients.dark.state, 0.6)
        )}, url(${bgImage})`,
      backgroundSize: "cover", // Added property to cover the entire container
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }),
    []
  );

  // const handleChange = (e, fieldName) => {
  //   const value = e.target.value;
  //   setState((prevState) => ({ ...prevState, [fieldName]: value }));
  // };

  // const displayProjectOrTask = () => {
  //   const activeInput = document.activeElement;
  //   const inputId = activeInput.id;

  //   if (inputId === "ProjectID") {
  //     const updatedChoices = state.projectIdData.map(({ projectName, projectType, projectId }) => (
  //       <MKTypography key={projectId}>{`${projectName} - ${projectType}${projectId}`}</MKTypography>
  //     ));

  //     setState((prevState) => ({
  //       ...prevState,
  //       currentChoices: updatedChoices,
  //     }));
  //   } else if (inputId === "TaskID") {
  //     const updatedChoices = state.taskIdData.map(({ taskName, taskId }) => (
  //       <MKTypography key={taskId}>{`${taskName} - ${taskId}`}</MKTypography>
  //     ));

  //     setState((prevState) => ({
  //       ...prevState,
  //       currentChoices: updatedChoices,
  //     }));
  //   }
  // };
  const handleInputFocus = () => {
    const activeInput = document.activeElement;
    const inputId = activeInput.id;
    setState((prevState) => ({
      ...prevState,
      activeInput: inputId, // Set the activeInput state option to the input's ID
    }));
    if (inputId === "ProjectID") {
      const updatedChoices = state.projectIdData.map(({ projectName, projectType, projectId }) => (
        <MKTypography key={projectId}>{`${projectName} - ${projectType}${projectId}`}</MKTypography>
      ));
      setState((prevState) => ({
        ...prevState,
        currentChoices: updatedChoices, // Set the activeInput state option to the input's ID
      }));
      console.log("project update", state.activeInput);
    } else if (inputId === "TaskID") {
      const updatedChoices = state.taskIdData.map(({ taskName, taskId }) => (
        <MKTypography key={taskId}>{`${taskName} - ${taskId}`}</MKTypography>
      ));
      setState((prevState) => ({
        ...prevState,
        currentChoices: updatedChoices, // Set the activeInput state option to the input's ID
      }));
    }
  };

  const delegateFunctionToTypography = (props) => {
    function getNumbersInOrder(str) {
      const numbersOnly = str.replace(/\D/g, "");
      return numbersOnly;
    }
    const targetProps = props;
    const targetString = getNumbersInOrder(targetProps.target.firstChild.data);
    if (state.activeInput === "ProjectID") {
      setState((prevState) => ({
        ...prevState,
        projectIdInput: targetString,
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        taskIdInput: targetString,
      }));
    }
  };

  // Render your component JSX and use the state.currentChoices to display the choices

  return (
    <>
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          ...bgImageStyle,
          overflowY: "auto",
          maxHeight: "100vh",
        }}
      />
      <MKBox px={1} mt={5} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={11} md={11} lg={8} xl={8}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="success"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
              >
                <MKTypography color="white" variant="h4" align="center" fontWeight={"medium"}>
                  Time Clock
                </MKTypography>
              </MKBox>
              <MKBox mx={2} align="center">
                <Grid mt={2} item xs={11} sm={11} md={11} lg={8} xl={8}>
                  <MKBox mt={2}>
                    <MKInput
                      id="ProjectID"
                      variant="outlined"
                      fullWidth
                      name="projectId"
                      value={state.projectIdInput}
                      label="ProjectID"
                      disabled={state.isTaskRunning}
                      inputMode="numeric"
                      onFocus={handleInputFocus}
                      required
                      error={state.projectIdInput === ""}
                      helperText={state.projectIdInput === "" ? "Project ID is required" : ""}
                      sx={{
                        fontSize: "", // Customize the font size here
                      }}
                    />
                  </MKBox>
                  <MKBox id="taskOrProjectData" mt={2} pb={5}>
                    {/* Container for task or project data */}
                    <PerfectScrollbar>
                      <MKBox
                        padding={2}
                        maxHeight="250px"
                        onClick={delegateFunctionToTypography}
                        overflowY="auto"
                      >
                        {state.currentChoices}
                      </MKBox>
                    </PerfectScrollbar>
                  </MKBox>
                  <MKBox mt={2}>
                    {/* Container for the TaskID input */}
                    <MKInput
                      id="TaskID"
                      label="TaskID"
                      variant="outlined"
                      fullWidth
                      name="taskId"
                      value={state.taskIdInput}
                      // Set activeInput to "TaskID" when the input field is focused
                      disabled={state.isTaskRunning}
                      inputMode="numeric"
                      onFocus={handleInputFocus}
                      required
                      error={state.taskIdInput === ""}
                      helperText={state.taskIdInput === "" ? "Task ID is required" : ""}
                    />
                  </MKBox>
                  <MKBox mt={2}>
                    <MKButton
                      variant="contained"
                      color={state.isTaskRunning ? "error" : "success"}
                      onClick={handleTaskSubmit}
                      fullWidth
                    >
                      {state.isTaskRunning ? "End Task" : "Start Task"}
                    </MKButton>
                  </MKBox>
                </Grid>

                <Grid item xs={11} sm={11} md={11} lg={8} xl={8}>
                  <MKBox mt={2} pb={5}>
                    <MKTypography variant="h5" align="center">
                      Notes
                    </MKTypography>
                    dasdfoidf
                    <MKBox padding={2}>
                      <MKInput label="Notes" multiline rows={4} variant="outlined" fullWidth />
                    </MKBox>
                    <Grid container spacing={1} justifyContent="center">
                      <Grid item xs={6}>
                        <MKButton variant="contained" color="success" fullWidth>
                          Submit
                        </MKButton>
                      </Grid>
                      <Grid item xs={6}>
                        <MKButton variant="contained" color="error" fullWidth>
                          Clear
                        </MKButton>
                      </Grid>
                    </Grid>
                    <MKBox mt={2} pb={5}>
                      <MKTypography variant="h5" align="center">
                        Clock History
                      </MKTypography>
                      <PerfectScrollbar>
                        <MKBox maxHeight="300px" overflowY="scroll">
                          {state.clockHistory.map(({ time, action }, index) => (
                            <Grid item xs={12} key={index}>
                              <MKTypography align="center">{`${time} - ${action}`}</MKTypography>
                            </Grid>
                          ))}
                        </MKBox>
                      </PerfectScrollbar>
                    </MKBox>
                  </MKBox>
                </Grid>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
    </>
  );
}

export default LightWaveDashboard;
