<?php

namespace Blog;

use PDO;
use PDOException;

// Interface
interface Loggable
{
  public function log($message);
}

// Trait
trait Timestampable
{
  protected $createdAt;
  protected $updatedAt;

  public function setTimestamps()
  {
    $this->createdAt = new DateTime();
    $this->updatedAt = new DateTime();
  }

  public function updateTimestamp()
  {
    $this->updatedAt = new DateTime();
  }
}

// Abstract class
abstract class BaseModel implements Loggable
{
  protected $db;

  public function __construct(PDO $db)
  {
    $this->db = $db;
  }

  public function log($message)
  {
    echo "[" . date('Y-m-d H:i:s') . "] $message
";
  }

  abstract public function save();
}

// Concrete class
class Post extends BaseModel
{
  use Timestampable;

  private $id;
  private $title;
  private $content;
  private $authorId;

  public function __construct(PDO $db, $title, $content, $authorId)
  {
    parent::__construct($db);
    $this->title = $title;
    $this->content = $content;
    $this->authorId = $authorId;
    $this->setTimestamps();
  }

  public function save()
  {
    try {
      $stmt = $this->db->prepare("INSERT INTO posts (title, content, author_id, created_at, updated_at) VALUES (?, ?, ?, ?, ?)");
      $stmt->execute([$this->title, $this->content, $this->authorId, $this->createdAt->format('Y-m-d H:i:s'), $this->updatedAt->format('Y-m-d H:i:s')]);
      $this->id = $this->db->lastInsertId();
      $this->log("Post saved with ID: " . $this->id);
      return true;
    } catch (PDOException $e) {
      $this->log("Error saving post: " . $e->getMessage());
      return false;
    }
  }

  public static function findById(PDO $db, $id)
  {
    $stmt = $db->prepare("SELECT * FROM posts WHERE id = ?");
    $stmt->execute([$id]);
    return $stmt->fetch(PDO::FETCH_ASSOC);
  }
}

class BlogManager
{
  private $db;

  public function __construct(PDO $db)
  {
    $this->db = $db;
  }

  public function createPost($title, $content, $authorId)
  {
    $post = new Post($this->db, $title, $content, $authorId);
    return $post->save();
  }

  public function getRecentPosts($limit = 5)
  {
    $stmt = $this->db->prepare("SELECT * FROM posts ORDER BY created_at DESC LIMIT ?");
    $stmt->execute([$limit]);
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }
}

// Usage example
try {
  $db = new PDO('mysql:host=localhost;dbname=blog', 'username', 'password');
  $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  $blogManager = new BlogManager($db);

  // Create a new post
  $blogManager->createPost("My First Blog Post", "This is the content of my first blog post.", 1);

  // Retrieve recent posts
  $recentPosts = $blogManager->getRecentPosts();
  foreach ($recentPosts as $post) {
    echo "Title: " . $post['title'] . "
";
    echo "Content: " . $post['content'] . "
";
    echo "Created At: " . $post['created_at'] . "
";
    echo "------------------------
";
  }

  // Retrieve a specific post
  $specificPost = Post::findById($db, 1);
  if ($specificPost) {
    echo "Specific Post Title: " . $specificPost['title'] . "
";
  } else {
    echo "Post not found.
";
  }
} catch (PDOException $e) {
  echo "Database Error: " . $e->getMessage();
}
