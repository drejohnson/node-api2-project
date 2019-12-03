import React from "react";
import { Box, Heading, Text, Button } from "rebass";

const Post = ({ post }) => {
  return (
    <Box
      sx={{
        p: 3,
        color: "text",
        bg: "background",
        fontFamily: "body",
        fontWeight: "body",
        lineHeight: "body"
      }}
    >
      <Heading variant="display" fontSize={[4, 5, 6]}>
        {post.title}
      </Heading>
      <Text as="p" mb={4}>
        {post.contents}
      </Text>
      <Button variant="outline" mr={3}>
        Edit
      </Button>
      <Button variant="outline">Delete</Button>
    </Box>
  );
};

export default Post;
