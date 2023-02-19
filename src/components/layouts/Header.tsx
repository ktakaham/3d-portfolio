import { Navbar, Text } from "@nextui-org/react";
import React, { useEffect } from "react";
import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";

/**
 * @package
 */

declare let window: any;

export const Header = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <>
      <Navbar variant="static">
        <Navbar.Brand css={{ alignItems: "center" }}>
          <Text
            h4
            b
            css={{
              textGradient: "45deg, $blue600 -40%, $pink600 70%",
              mt: 10,
            }}>
            album.
          </Text>
        </Navbar.Brand>
        <Navbar.Content>
          <Switch
            checked={isDark}
            color="secondary"
            css={{ marginTop: -4 }}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
            iconOn={
              <MoonIcon
                filled
                size={undefined}
                height={undefined}
                width={undefined}
                label={undefined}
              />
            }
            iconOff={
              <SunIcon
                filled
                size={undefined}
                height={undefined}
                width={undefined}
                label={undefined}
              />
            }
          />
        </Navbar.Content>
      </Navbar>
    </>
  );
};
