import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, fireEvent, render, screen, within } from "@testing-library/react";
import { DashboardHeader } from "./DashboardHeader";
import { CommandPaletteProvider } from "@/components/CommandPalette/CommandPaletteProvider";

const { mockUsePluginMode, mockUseUISettings, state } = vi.hoisted(() => {
  const state = {
    plugins: [] as { name: string; display_name: string; url: string }[],
    enableChatUI: false,
    pathname: "/ui/logs",
    isDesktop: false,
  };
  return {
    state,
    mockUsePluginMode: vi.fn(() => ({ mode: "ai-gateway", setMode: vi.fn(), plugins: state.plugins })),
    mockUseUISettings: vi.fn(() => ({ data: { values: { enable_chat_ui: state.enableChatUI } } })),
  };
});

vi.mock("@/contexts/PluginModeContext", () => ({ usePluginMode: mockUsePluginMode }));
vi.mock("@/app/(dashboard)/hooks/uiSettings/useUISettings", () => ({ useUISettings: mockUseUISettings }));
vi.mock("next/navigation", () => ({ usePathname: () => state.pathname }));
vi.mock("usehooks-ts", () => ({ useMediaQuery: () => state.isDesktop }));
vi.mock("@/hooks/useWorker", () => ({ useWorker: () => ({ isControlPlane: false, selectedWorker: null }) }));
vi.mock("@/components/Navbar/WorkerDropdown/WorkerDropdown", () => ({ default: () => null }));
vi.mock("@/components/liteadmin/LiteAdmin", () => ({ default: () => <button>Aria Agent</button> }));

const renderDashboardHeader = () =>
  render(
    <CommandPaletteProvider>
      <DashboardHeader accessToken={null} />
    </CommandPaletteProvider>,
  );

describe("DashboardHeader breadcrumb", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    state.plugins = [];
    state.enableChatUI = false;
    state.pathname = "/ui/logs";
    state.isDesktop = false;
    localStorage.clear();
  });

  it("titles the breadcrumb from the current route, not from a sidebar page id", () => {
    state.pathname = "/ui/models-and-endpoints";
    renderDashboardHeader();

    expect(screen.getByText("Models + Endpoints")).toBeInTheDocument();
  });

  it("titles the dashboard root as Home", () => {
    state.pathname = "/ui/";
    renderDashboardHeader();

    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("roots the breadcrumb in the AI Gateway selector (with a Chat option) and drops the static section crumb when the selector is available", async () => {
    state.enableChatUI = true;
    renderDashboardHeader();

    expect(screen.getByText("Logs")).toBeInTheDocument();
    expect(screen.queryByText("Observability")).not.toBeInTheDocument();

    const selector = screen.getByRole("button", { name: /AI Gateway/i });
    act(() => {
      fireEvent.click(selector);
    });
    expect(await screen.findByText("Chat")).toBeInTheDocument();
  });

  it("keeps the AI Gateway selector at the root even when there is nothing to switch to (discovery)", () => {
    renderDashboardHeader();

    expect(screen.getByRole("button", { name: /AI Gateway/i })).toBeInTheDocument();
    expect(screen.getByText("Logs")).toBeInTheDocument();
    expect(screen.queryByText("Observability")).not.toBeInTheDocument();
  });

  it("omits external documentation, blog, and community shortcuts", () => {
    renderDashboardHeader();

    expect(screen.queryByRole("link", { name: "Docs" })).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Blog" })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /github|slack/i })).not.toBeInTheDocument();
  });

  it("renders the tools divider centered rather than stretched to the top of the row", () => {
    const { container } = renderDashboardHeader();

    const separators = container.querySelectorAll('[data-slot="separator"][data-orientation="vertical"]');
    expect(separators).toHaveLength(1);
    expect(separators[0].className).not.toMatch(/self-stretch/);
    expect(separators[0].className).toContain("data-vertical:self-center");
  });

  it("keeps Aria Agent in the header tools", () => {
    renderDashboardHeader();

    const liteAdmin = within(screen.getByRole("banner")).getByRole("button", { name: "Aria Agent" });
    expect(liteAdmin).toBeInTheDocument();
  });

  it("should keep the gateway selector and tools available from the compact header menu", async () => {
    renderDashboardHeader();
    act(() => {
      fireEvent.click(screen.getByRole("button", { name: "More options" }));
    });
    const tools = await screen.findByRole("dialog", { name: "Gateway tools" });
    expect(within(tools).getByRole("button", { name: /Switch workspace.*AI Gateway/ })).toBeInTheDocument();
    expect(within(tools).queryByRole("link", { name: "Docs" })).not.toBeInTheDocument();
    expect(within(tools).queryByRole("button", { name: "Blog" })).not.toBeInTheDocument();
    expect(within(tools).queryByRole("link", { name: /github|slack/i })).not.toBeInTheDocument();
    expect(within(screen.getByRole("banner")).getByRole("button", { name: "Aria Agent" })).toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: "Aria Agent" })).toHaveLength(1);
  });

  it("closes mobile tools when switching to desktop and keeps them closed when returning", async () => {
    const { rerender } = renderDashboardHeader();
    fireEvent.click(screen.getByRole("button", { name: "More options" }));
    expect(await screen.findByRole("dialog", { name: "Gateway tools" })).toBeInTheDocument();

    state.isDesktop = true;
    rerender(
      <CommandPaletteProvider>
        <DashboardHeader accessToken={null} />
      </CommandPaletteProvider>,
    );
    expect(screen.queryByRole("dialog", { name: "Gateway tools" })).not.toBeInTheDocument();

    state.isDesktop = false;
    rerender(
      <CommandPaletteProvider>
        <DashboardHeader accessToken={null} />
      </CommandPaletteProvider>,
    );
    expect(screen.queryByRole("dialog", { name: "Gateway tools" })).not.toBeInTheDocument();
  });
});
