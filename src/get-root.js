let huiRoot = document.querySelector('home-assistant');
huiRoot = huiRoot && huiRoot.shadowRoot;
huiRoot = huiRoot && huiRoot.querySelector('home-assistant-main');
huiRoot = huiRoot && huiRoot.shadowRoot;
huiRoot = huiRoot && huiRoot.querySelector('app-drawer-layout partial-panel-resolver');
huiRoot = huiRoot && huiRoot.shadowRoot || huiRoot;
huiRoot = huiRoot && huiRoot.querySelector('ha-panel-lovelace');
huiRoot = huiRoot && huiRoot.shadowRoot;
huiRoot = huiRoot && huiRoot.querySelector('hui-root');
export const { lovelace } = huiRoot;
export const root = huiRoot.shadowRoot;
