# IMSI Catcher

Estimated Time: ~5 minutes

## Summary

This lab lets you watch what happens when a rouge AP is set up, an IMSI or 'International Mobile Subscriber Identity' is your phones unique identifier and if stolen you could be tracked, impersonated or have information compromised  

---

## Learning Objectives

- Understand IMSI identifiers
- Learn cellular network architecture
- Observe rogue tower behavior
- Analyze cellular handoffs

---

## Launching the Lab

Start SDRForge:

```bash
python3 SDRForge.py
```

Select:

```txt
IMSI Catcher
```

![IMSI Catcher Menu](/img/imsi-menu.png)

---

## Interface Overview

The dashboard contains:

- Cellular Feild Map - Shows simulated motion around towers
- Alerts - Helps keep up with what is happening to who
- Captured IMIS's - This is where we see compromised devices with their exposed IMSI's
- Devices - A list of devices wit hthei status and info

![IMSI Dashboard](/img/imsi-dashboard.png)

---

## What is an IMSI?

IMSI stands for:

```txt
International Mobile Subscriber Identity
```

It is used by cellular networks to uniquely identify subscribers.

---

## IMSI Collection Feed

The center panel displays simulated IMSI captures, a would be attacker can keep track of range and info in here.

![IMSI Feed](/img/imsi-feed.png)

---

## Device Visualization

A map of movments used totrake whoes moving where and how close they are to connecting to the rouge AP.

![Device Visualization](/img/imsi-devices.png)

---

## Handoff Monitoring

The handoff feed displays movement between cells and simulated tower transitions.

![Handoff Feed](/img/imsi-handoff.png)

---

## Rogue Tower Demonstration

Notice how multiple devices interact with a simulated rogue tower.

![Rogue Tower Diagram](/img/imsi-tower.png)

---

## IMSI Catcher Workflow

```txt
Devices
    ↓
 Rogue Tower
    ↓
 IMSI Collection
    ↓
 Activity Feed
```

---


## Troubleshooting

### Devices are not appearing

Refresh the page and restart the lab.

### Handoff feed stops updating

Relaunch the simulation.

### Dashboard appears frozen

Reload the browser and restart the lab.

---
