package myproject.board.repository;

import lombok.extern.slf4j.Slf4j;
import myproject.board.domain.Board;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


import static org.assertj.core.api.Assertions.assertThat;

@Slf4j
@SpringBootTest
class BoardListRepositoryTest {
    @Autowired BoardListRepository repository;

    // 작동 확인
//    @Test
//    void save() {
//        Board board = new Board("마지막..", "제발 성공좀..", date, 0, "user1");
//
//        Board savedBoard = repository.save(board);
//
//        Board findBoard = repository.findById(board.getId()).get();
//        assertThat(findBoard).isEqualTo(savedBoard);
//    }

    @Test
    void findById() {
        
    }
}