// Sound completely disabled per user directive: "esta web no tendra sonidos"
export function isSoundEnabled(): boolean {
  return false;
}

export function toggleSound(): boolean {
  return false;
}

export function playRetroSound(_type?: string): void {
  // no-op: sound disabled
}
