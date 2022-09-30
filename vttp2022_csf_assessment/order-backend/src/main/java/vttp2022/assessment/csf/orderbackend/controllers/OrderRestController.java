package vttp2022.assessment.csf.orderbackend.controllers;

import java.util.List;

import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.json.Json;
import jakarta.json.JsonArrayBuilder;
import vttp2022.assessment.csf.orderbackend.models.Order;
import vttp2022.assessment.csf.orderbackend.models.OrderSummary;
import vttp2022.assessment.csf.orderbackend.models.Response;
import vttp2022.assessment.csf.orderbackend.services.OrderService;

@RestController
@RequestMapping(path = "/api/order/", produces = MediaType.APPLICATION_JSON_VALUE)
public class OrderRestController {

    @Autowired
    private OrderService orderSvc;

    private Logger logger = Logger.getLogger(OrderRestController.class.getName());

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> postOrder(@RequestBody String payload) {

        logger.info("Payload: %s".formatted(payload));

        Order order;
        Response resp;

        try {
            order = Order.create(payload);
            this.orderSvc.createOrder(order);

        } catch (Exception ex) {
            resp = new Response();
            resp.setCode(404);
            resp.setMessage(ex.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(resp.toJson().toString());
        }

        resp = new Response();
        resp.setCode(201);
        resp.setMessage("data");
        resp.setData(order.toJson().toString());
        return ResponseEntity.status(HttpStatus.CREATED).body(resp.toJson().toString());

    }

    @GetMapping(path = "{email}/all")
    public ResponseEntity<String> getOrderDetails(@PathVariable String email) {

        logger.info("CORS: email=%s".formatted(email));

        List<OrderSummary> summaries = orderSvc.getOrdersByEmail(email);

        JsonArrayBuilder arrBuilder = Json.createArrayBuilder();
        for (OrderSummary summary : summaries)
            arrBuilder.add(summary.toJson());

        return ResponseEntity.status(HttpStatus.OK).body(arrBuilder.build().toString());
    }
}
