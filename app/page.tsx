import { Button, Container, View, Text } from "reshaped";

export default function Home() {
  return (
    <View align="center" justify="center" height="100vh">
      <Container width="600px">
        <View gap={3} align="center">
          <Text variant="featured-1" weight="bold">🎉</Text>
          <Text variant="featured-1" weight="bold" align="center">
            Welcome to Reshaped
          </Text>
          <Text variant="featured-3" align="center" color="neutral-faded">
            Reshaped is a professionally crafted design system for everyday
            product development made to match your brand. In this example
            repository we&apos;re using it together with NextJS
          </Text>
          <View.Item gapBefore={6}>
            <Button
              size="large"
              color="primary"
              href="https://reshaped.so"
              attributes={{ target: "_blank" }}
            >
              Check our website
            </Button>
          </View.Item>
        </View>
      </Container>
    </View>
  )
}
