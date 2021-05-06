.viewArea {
  @apply relative overflow-auto w-full;

  --scroll-direction: initial;
  --scroll-type: initial;

  --scroll-align-block: start;
  --scroll-align-inline: start;

  scroll-snap-type: var(--scroll-direction) var(--scroll-type);
}
.viewArea.hideScrollbar::-webkit-scrollbar {
  display: none;
}
.viewArea.hideScrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.viewArea > div {
  @apply inline-flex;
}
.viewArea.y > div {
  @apply flex-col;
}

.viewArea > div > * {
  scroll-snap-align: var(--scroll-align-block) var(--scroll-align-inline);
}

.scroll-align-block-center {
  --scroll-align-block: center;
}
.scroll-align-inline-center {
  --scroll-align-inline: center;
}
.scroll-align-block-start {
  --scroll-align-block: start;
}
.scroll-align-inline-start {
  --scroll-align-inline: start;
}
.scroll-align-block-end {
  --scroll-align-block: end;
}
.scroll-align-inline-end {
  --scroll-align-inline: end;
}
.scroll-align-block-none {
  --scroll-align-block: none;
}
.scroll-align-inline-none {
  --scroll-align-inline: none;
}
.scroll-align-center {
  --scroll-align-block: center;
  --scroll-align-inline: center;
}
.scroll-align-start {
  --scroll-align-block: start;
  --scroll-align-inline: start;
}
.scroll-align-end {
  --scroll-align-block: end;
  --scroll-align-inline: end;
}
.scroll-align-none {
  --scroll-align-block: none;
  --scroll-align-inline: none;
}

.both {
  --scroll-direction: both;
}

.x {
  --scroll-direction: x;
}

.y {
  --scroll-direction: y;
}

.mandatory {
  --scroll-type: mandatory;
}

.proximity {
  --scroll-type: proximity;
}
