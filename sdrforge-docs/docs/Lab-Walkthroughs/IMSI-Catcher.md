# IMSI Catcher

Estimated Time: ~5 minutes

## Summary

The IMSI Catcher lab demonstrates cellular identification concepts and how rogue base stations can collect subscriber identifiers.

This simulation is software-only and designed strictly for educational purposes.

---

## Learning Objectives

- Understand IMSI identifiers
- Learn cellular network architecture
- Observe rogue tower behavior
- Visualize subscriber collection concepts
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

- Cellular activity feed
- Device visualization
- IMSI collection panel
- Handoff monitoring feed

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

The center panel displays simulated IMSI captures.

![IMSI Feed](/img/imsi-feed.png)

---

## Device Visualization

Observe nearby devices moving between cellular towers.

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
