# Doorbell Relay

Estimated Time: ~10 minutes

## Summary

This lab demonstrates wireless relay and replay attack concepts using simulated OOK/ASK doorbell transmissions.

The objective is to understand how simple RF devices can be analyzed and replayed.

---

## Learning Objectives

- Understand OOK modulation
- Learn replay attack concepts
- Analyze pulse timing
- Observe signal relay behavior
- Visualize captured RF activity

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

![Doorbell Menu](/img/doorbell-menu.png)

---

## Interface Overview

The lab includes:

- Waterfall display
- Signal visualization
- Relay controls
- Timing analysis

![Waterfall Display](/img/doorbell-waterfall.png)

---

## Capturing a Signal

The simulated doorbell transmission appears in the analysis panel.

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
