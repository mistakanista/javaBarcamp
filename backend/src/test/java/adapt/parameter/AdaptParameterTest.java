package adapt.parameter;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static original.OrderService.ORDER_PLACED;

class AdaptParameterTest {
    static class DummySender implements MessageSender {
        String lastMessage;
        @Override
        public void send(String message) {
            lastMessage = message;
        }
    }

    @Test
    void testAdaptParameter() {
        DummySender dummySender = new DummySender();
        OrderService service = new OrderService(dummySender);

        String testOrder = "adapt-123";
        service.placeOrder(testOrder);

        assertEquals(ORDER_PLACED + testOrder, dummySender.lastMessage);
    }
}