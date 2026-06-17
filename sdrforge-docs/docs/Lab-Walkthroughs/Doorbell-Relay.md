# Doorbell Relay

Estimated Time: ~10 minutes

## Summary

The objective is to understand how simple RF devices can be analyzed and replayed. This lab shows you the basics of a relay attack on a doorbell , but think about everything that uses radios and remote frequencies. 

---

## Launching the Lab

Start SDRForge:

```bash
python3 SDRForge.py
```

Select:

```txt
Doorbell Relay
```
---
## Main Menu

This is the main menu for the relay lab
- See the Signal - This shows you the signal of the simulated relay
- How It's Done - This is where you can take a look at the SDR itself


![Doorbell Menu](/img/doorbell-menu.png)

---

## Interface Overview

The lab includes:

- Waterfall display - the blip or wave in action
- Signal visualization - the blip itself acting as a doorbell

![Waterfall Display](/img/doorbell-waterfall.png)

---

## Capturing a Signal

The simulated doorbell can be seen here, this shows the input (vector source) and how it can be output. Making 1's and 0's into a radio wave

![Captured Signal](/img/doorbell-capture.png)

---

## Understanding Relay Attacks

Basic workflow:

1. Capture transmission 
2. Analyze pulse timing
3. Store signal pattern
4. Replay signal
5. Trigger receiver

---

## Educational Notes

This simulation does not transmit RF signals.

The purpose is to demonstrate wireless attack concepts safely and legally.

---

## Troubleshooting

### Waterfall not moving

Refresh the page and relaunch the simulation.

### Browser closes unexpectedly

Verify required dependencies are installed.

---
