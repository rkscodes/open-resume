import { View } from "@react-pdf/renderer";
import {
  ResumePDFSection,
  ResumePDFBulletList,
  ResumePDFText,
  ResumePDFLink,
} from "components/Resume/ResumePDF/common";
import {
  ResumePDFIcon,
} from "components/Resume/ResumePDF/common/ResumePDFIcon";
import { styles, spacing } from "components/Resume/ResumePDF/styles";
import type { ResumeProject } from "lib/redux/types";

export const ResumePDFProject = ({
  heading,
  projects,
  themeColor,
  isPDF,
}: {
  heading: string;
  projects: ResumeProject[];
  themeColor: string;
  isPDF: boolean;
}) => {
  const textStyleWithLink = { color: '#007BFF', textDecoration: 'none' };
  const textStyleWithoutLink = { color: 'black' };
  return (
    <ResumePDFSection themeColor={themeColor} heading={heading}>
      {projects.map(({ project, date, link, descriptions }, idx) => {
        // Determine style based on the presence of a link
        const textStyle = link ? textStyleWithLink : textStyleWithoutLink;

        return (
          <View key={idx}>
            <View
              style={{
                ...styles.flexRowBetween,
                marginTop: spacing["0.5"],
              }}
            >
              <ResumePDFLink src={link} isPDF={isPDF}>
                <View style={{
                  ...styles.flexRow,
                  alignItems: "center",
                  gap: spacing["1"],
                }}>
                  {link && <ResumePDFIcon type="url" isPDF={isPDF} />}
                  <ResumePDFText bold={true} style={textStyle}>
                    {project}
                  </ResumePDFText>
                </View>
              </ResumePDFLink>

              <ResumePDFText>{date}</ResumePDFText>
            </View>
            <View style={{ ...styles.flexCol, marginTop: spacing["0.5"] }}>
              <ResumePDFBulletList items={descriptions} />
            </View>
          </View>
        );
      })}
    </ResumePDFSection>
  );
};