const getPortalRoot = (): HTMLElement => typeof window !== "undefined" && (document.getElementById("portal-root") ?? document.body);

export default getPortalRoot;
