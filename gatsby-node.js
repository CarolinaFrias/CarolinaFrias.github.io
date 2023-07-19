exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type YouTubeThumbnail implements Node {
      url: String
      width: String
      height: String
    }
    type YouTubeNode implements Node {
      id: String
      title: String
      description: String
      videoId: String
      publishedAt: Date! @dateformat
      privacyStatus: String
      channelTitle: String
      thumbnail: YouTubeThumbnail
    }
    type YouTubeEdges implements Node {
      node: [YouTubeNode]
    }
    type allYoutubeVideo implements Node {
      edges: [YouTubeEdges]
    }
  `;
  createTypes(typeDefs);
};
