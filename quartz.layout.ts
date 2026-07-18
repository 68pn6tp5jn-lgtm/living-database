import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
// Here we import your custom footer directly
import { Footer } from "./quartz/components/Footer" 

export const defaultPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle(), Component.ContentMeta(), Component.TagList()],
  left: [Component.PageTitle(), Component.MobileOnly(Component.Spacer()), Component.Search(), Component.Darkmode(), Component.Explorer()],
  right: [Component.Graph(), Component.Backlinks(), Component.TableOfContents()],
  footer: [Footer()], // Use the imported Footer here
}

export const defaultSharedLayout: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: [Footer()], // Use the imported Footer here
}