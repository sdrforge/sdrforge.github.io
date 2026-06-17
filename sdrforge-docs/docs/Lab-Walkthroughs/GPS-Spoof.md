# GPS Spoof

Estimated Time: ~2 minutes

## Summary

This lab demonstrates GPS spoofing concepts using a simulated SDR environment.

The goal is to understand how a real spoofer would be used or look.

![GPS Spoof UI](/img/gps_use.png)

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

- Scramble would be a random loctions generateds based off of your current location, sometimes it puts you in the ocean but after a few clicks you'd see a "spoofed"" location in a completly different area
- Drift places you in a random area near by.
- Carry-off allows you to move at a consisten pace in one direction

![Interface](/img/gpsspoof-interface.png)

---

## Spoofing Simulation

Press:

```txt
Scramble
```

to simulate a complete area change

Then by pressing Carry-off you can continuously spoof your virtual location.

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
