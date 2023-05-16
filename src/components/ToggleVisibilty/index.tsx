import { Eye, EyeClosed } from "phosphor-react-native";
import { useTheme } from "styled-components";
import { TouchableOpacity } from "react-native";

interface ToggleVisibilityProps {
  visible: boolean;
  toggleVisibility: () => void;
}

export const ToggleVisibility = ({
  visible,
  toggleVisibility,
}: ToggleVisibilityProps) => {
  const { COLORS } = useTheme();

  return visible ? (
    <TouchableOpacity onPress={toggleVisibility}>
      <EyeClosed size={24} color={COLORS.GRAY_200} />
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={toggleVisibility}>
      <Eye size={24} color={COLORS.GRAY_200} />
    </TouchableOpacity>
  );
};
