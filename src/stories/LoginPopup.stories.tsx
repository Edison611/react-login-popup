import type { Meta, StoryObj } from "@storybook/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import LoginPopup from "../LoginPopup";


const meta: Meta<typeof LoginPopup> = {
  title: "Components/LoginPopup",
  component: LoginPopup,
  decorators: [
    (Story) => (
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <Story />
      </GoogleOAuthProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof LoginPopup>;

export const Default: Story = {
  args: {
    onSuccess: (res) => console.log("Success:", res),
    onError: () => console.log("Error"),
  },
};
