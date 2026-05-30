# GPS Spoof

Estimated Time: ~2 minutes

## Summary

This lab demonstrates GPS spoofing concepts using a simulated SDR environment.

The goal is to understand how false navigation data can manipulate receiver positioning systems.

![GPS Spoof UI](/img/gps_use.png)

---

## Learning Objectives

- Understand GPS spoofing concepts
- Analyze spoofed coordinate data
- Observe navigation drift
- Learn SDR visualization workflows

---

## Launching the Lab

Start SDRForge:

```bash
python3 SDRForge.py
```

Select:

```txt
GPS Spoof
```

---

## Interface Overview

The lab contains:

- live map visualization
- spoof controls
- coordinate scrambling
- signal telemetry feed

![Interface](/img/gpsspoof-interface.png)

---

## Spoofing Simulation

Press:

```txt
SCRAMBLE
```

to generate spoofed location packets.

The simulated receiver will begin drifting from its original location.

---

## Educational Notes

This lab is software-only and does not transmit real RF signals.

Its purpose is to demonstrate:

- navigation spoofing concepts
- SDR workflows
- signal analysis techniques

---

## Troubleshooting

### Browser does not launch

Install dependencies:

```bash
pip install flask flask-socketio
```

### Location not updating

Refresh the browser and restart the lab.

---
