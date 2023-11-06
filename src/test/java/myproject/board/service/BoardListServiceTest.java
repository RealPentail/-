package myproject.board.service;

import lombok.RequiredArgsConstructor;
import myproject.board.domain.Board;
import myproject.board.repository.BoardListRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.text.SimpleDateFormat;
import java.util.Date;

import static org.assertj.core.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class BoardListServiceTest {
    @Autowired
    BoardListRepository repository;




    @Test
    void save() {

    }

}